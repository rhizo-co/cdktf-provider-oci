# `dataOciMysqlMysqlConfiguration` Submodule <a name="`dataOciMysqlMysqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlConfiguration <a name="DataOciMysqlMysqlConfiguration" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration oci_mysql_mysql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfiguration(Construct Scope, string Id, DataOciMysqlMysqlConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig">DataOciMysqlMysqlConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig">DataOciMysqlMysqlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlConfiguration.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMysqlMysqlConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMysqlMysqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.initVariables">InitVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList">DataOciMysqlMysqlConfigurationInitVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.parentConfigurationId">ParentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList">DataOciMysqlMysqlConfigurationVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitVariables`<sup>Required</sup> <a name="InitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.initVariables"></a>

```csharp
public DataOciMysqlMysqlConfigurationInitVariablesList InitVariables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList">DataOciMysqlMysqlConfigurationInitVariablesList</a>

---

##### `ParentConfigurationId`<sup>Required</sup> <a name="ParentConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.parentConfigurationId"></a>

```csharp
public string ParentConfigurationId { get; }
```

- *Type:* string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.variables"></a>

```csharp
public DataOciMysqlMysqlConfigurationVariablesList Variables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList">DataOciMysqlMysqlConfigurationVariablesList</a>

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlConfigurationConfig <a name="DataOciMysqlMysqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConfigurationId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}.

---

### DataOciMysqlMysqlConfigurationInitVariables <a name="DataOciMysqlMysqlConfigurationInitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationInitVariables {

};
```


### DataOciMysqlMysqlConfigurationVariables <a name="DataOciMysqlMysqlConfigurationVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationVariables {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlConfigurationInitVariablesList <a name="DataOciMysqlMysqlConfigurationInitVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationInitVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get"></a>

```csharp
private DataOciMysqlMysqlConfigurationInitVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationInitVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationInitVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables">DataOciMysqlMysqlConfigurationInitVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LowerCaseTableNames`<sup>Required</sup> <a name="LowerCaseTableNames" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```csharp
public string LowerCaseTableNames { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlConfigurationInitVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables">DataOciMysqlMysqlConfigurationInitVariables</a>

---


### DataOciMysqlMysqlConfigurationVariablesList <a name="DataOciMysqlMysqlConfigurationVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get"></a>

```csharp
private DataOciMysqlMysqlConfigurationVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.autocommit">Autocommit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.bigTables">BigTables</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds">BinlogExpireLogsSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata">BinlogRowMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions">BinlogRowValueOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression">BinlogTransactionCompression</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.completionType">CompletionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize">ConnectionMemoryChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit">ConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth">CteMaxRecursionDepth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin">DefaultAuthenticationPlugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks">ForeignKeyChecks</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength">GeneratedRandomPasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit">GlobalConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking">GlobalConnectionMemoryTracking</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency">GroupReplicationConsistency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct">InnodbBufferPoolDumpPct</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances">InnodbBufferPoolInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize">InnodbBufferPoolSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize">InnodbDdlBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads">InnodbDdlThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword">InnodbFtEnableStopword</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize">InnodbFtMaxTokenSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize">InnodbFtNumWordOptimize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit">InnodbFtResultCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads">InnodbLogWriterThreads</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag">InnodbMaxPurgeLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay">InnodbMaxPurgeLagDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages">InnodbStatsPersistentSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages">InnodbStatsTransientSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.localInfile">LocalInfile</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles">MandatoryRoles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize">MaxBinlogCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors">MaxConnectErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime">MaxExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount">MaxPreparedStmtCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode">MysqlFirewallMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout">MysqlxConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">MysqlxDeflateDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">MysqlxDeflateMaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">MysqlxDocumentIdUniquePrefix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice">MysqlxEnableHelloNotice</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">MysqlxIdleWorkerThreadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout">MysqlxInteractiveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">MysqlxLz4DefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">MysqlxLz4MaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket">MysqlxMaxAllowedPacket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads">MysqlxMinWorkerThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout">MysqlxReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout">MysqlxWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout">MysqlxWriteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">MysqlxZstdDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">MysqlxZstdMaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">MysqlZstdDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout">NetReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize">ParserMaxMemSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize">QueryAllocBlockSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize">QueryPreallocSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit">RegexpTimeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize">SortBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlMode">SqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings">SqlWarnings</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners">ThreadPoolDedicatedListeners</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit">ThreadPoolMaxTransactionsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize">TmpTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation">TransactionIsolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout">WaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables">DataOciMysqlMysqlConfigurationVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autocommit`<sup>Required</sup> <a name="Autocommit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.autocommit"></a>

```csharp
public IResolvable Autocommit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BigTables`<sup>Required</sup> <a name="BigTables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.bigTables"></a>

```csharp
public IResolvable BigTables { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BinlogExpireLogsSeconds`<sup>Required</sup> <a name="BinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```csharp
public double BinlogExpireLogsSeconds { get; }
```

- *Type:* double

---

##### `BinlogRowMetadata`<sup>Required</sup> <a name="BinlogRowMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata"></a>

```csharp
public string BinlogRowMetadata { get; }
```

- *Type:* string

---

##### `BinlogRowValueOptions`<sup>Required</sup> <a name="BinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions"></a>

```csharp
public string BinlogRowValueOptions { get; }
```

- *Type:* string

---

##### `BinlogTransactionCompression`<sup>Required</sup> <a name="BinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression"></a>

```csharp
public IResolvable BinlogTransactionCompression { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CompletionType`<sup>Required</sup> <a name="CompletionType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.completionType"></a>

```csharp
public string CompletionType { get; }
```

- *Type:* string

---

##### `ConnectionMemoryChunkSize`<sup>Required</sup> <a name="ConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```csharp
public double ConnectionMemoryChunkSize { get; }
```

- *Type:* double

---

##### `ConnectionMemoryLimit`<sup>Required</sup> <a name="ConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit"></a>

```csharp
public string ConnectionMemoryLimit { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `CteMaxRecursionDepth`<sup>Required</sup> <a name="CteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```csharp
public string CteMaxRecursionDepth { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationPlugin`<sup>Required</sup> <a name="DefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```csharp
public string DefaultAuthenticationPlugin { get; }
```

- *Type:* string

---

##### `ForeignKeyChecks`<sup>Required</sup> <a name="ForeignKeyChecks" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks"></a>

```csharp
public IResolvable ForeignKeyChecks { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `GeneratedRandomPasswordLength`<sup>Required</sup> <a name="GeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```csharp
public double GeneratedRandomPasswordLength { get; }
```

- *Type:* double

---

##### `GlobalConnectionMemoryLimit`<sup>Required</sup> <a name="GlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```csharp
public string GlobalConnectionMemoryLimit { get; }
```

- *Type:* string

---

##### `GlobalConnectionMemoryTracking`<sup>Required</sup> <a name="GlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```csharp
public IResolvable GlobalConnectionMemoryTracking { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `GroupReplicationConsistency`<sup>Required</sup> <a name="GroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency"></a>

```csharp
public string GroupReplicationConsistency { get; }
```

- *Type:* string

---

##### `InformationSchemaStatsExpiry`<sup>Required</sup> <a name="InformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```csharp
public double InformationSchemaStatsExpiry { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolDumpPct`<sup>Required</sup> <a name="InnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```csharp
public double InnodbBufferPoolDumpPct { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolInstances`<sup>Required</sup> <a name="InnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```csharp
public double InnodbBufferPoolInstances { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolSize`<sup>Required</sup> <a name="InnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize"></a>

```csharp
public string InnodbBufferPoolSize { get; }
```

- *Type:* string

---

##### `InnodbDdlBufferSize`<sup>Required</sup> <a name="InnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize"></a>

```csharp
public string InnodbDdlBufferSize { get; }
```

- *Type:* string

---

##### `InnodbDdlThreads`<sup>Required</sup> <a name="InnodbDdlThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads"></a>

```csharp
public double InnodbDdlThreads { get; }
```

- *Type:* double

---

##### `InnodbFtEnableStopword`<sup>Required</sup> <a name="InnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword"></a>

```csharp
public IResolvable InnodbFtEnableStopword { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InnodbFtMaxTokenSize`<sup>Required</sup> <a name="InnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```csharp
public double InnodbFtMaxTokenSize { get; }
```

- *Type:* double

---

##### `InnodbFtMinTokenSize`<sup>Required</sup> <a name="InnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```csharp
public double InnodbFtMinTokenSize { get; }
```

- *Type:* double

---

##### `InnodbFtNumWordOptimize`<sup>Required</sup> <a name="InnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```csharp
public double InnodbFtNumWordOptimize { get; }
```

- *Type:* double

---

##### `InnodbFtResultCacheLimit`<sup>Required</sup> <a name="InnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```csharp
public string InnodbFtResultCacheLimit { get; }
```

- *Type:* string

---

##### `InnodbFtServerStopwordTable`<sup>Required</sup> <a name="InnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```csharp
public string InnodbFtServerStopwordTable { get; }
```

- *Type:* string

---

##### `InnodbLockWaitTimeout`<sup>Required</sup> <a name="InnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```csharp
public double InnodbLockWaitTimeout { get; }
```

- *Type:* double

---

##### `InnodbLogWriterThreads`<sup>Required</sup> <a name="InnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads"></a>

```csharp
public IResolvable InnodbLogWriterThreads { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InnodbMaxPurgeLag`<sup>Required</sup> <a name="InnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```csharp
public string InnodbMaxPurgeLag { get; }
```

- *Type:* string

---

##### `InnodbMaxPurgeLagDelay`<sup>Required</sup> <a name="InnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```csharp
public double InnodbMaxPurgeLagDelay { get; }
```

- *Type:* double

---

##### `InnodbStatsPersistentSamplePages`<sup>Required</sup> <a name="InnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```csharp
public string InnodbStatsPersistentSamplePages { get; }
```

- *Type:* string

---

##### `InnodbStatsTransientSamplePages`<sup>Required</sup> <a name="InnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```csharp
public string InnodbStatsTransientSamplePages { get; }
```

- *Type:* string

---

##### `InteractiveTimeout`<sup>Required</sup> <a name="InteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout"></a>

```csharp
public double InteractiveTimeout { get; }
```

- *Type:* double

---

##### `LocalInfile`<sup>Required</sup> <a name="LocalInfile" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.localInfile"></a>

```csharp
public IResolvable LocalInfile { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MandatoryRoles`<sup>Required</sup> <a name="MandatoryRoles" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles"></a>

```csharp
public string MandatoryRoles { get; }
```

- *Type:* string

---

##### `MaxAllowedPacket`<sup>Required</sup> <a name="MaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket"></a>

```csharp
public double MaxAllowedPacket { get; }
```

- *Type:* double

---

##### `MaxBinlogCacheSize`<sup>Required</sup> <a name="MaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize"></a>

```csharp
public string MaxBinlogCacheSize { get; }
```

- *Type:* string

---

##### `MaxConnectErrors`<sup>Required</sup> <a name="MaxConnectErrors" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors"></a>

```csharp
public string MaxConnectErrors { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxExecutionTime`<sup>Required</sup> <a name="MaxExecutionTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime"></a>

```csharp
public string MaxExecutionTime { get; }
```

- *Type:* string

---

##### `MaxHeapTableSize`<sup>Required</sup> <a name="MaxHeapTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize"></a>

```csharp
public string MaxHeapTableSize { get; }
```

- *Type:* string

---

##### `MaxPreparedStmtCount`<sup>Required</sup> <a name="MaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount"></a>

```csharp
public double MaxPreparedStmtCount { get; }
```

- *Type:* double

---

##### `MysqlFirewallMode`<sup>Required</sup> <a name="MysqlFirewallMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode"></a>

```csharp
public IResolvable MysqlFirewallMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MysqlxConnectTimeout`<sup>Required</sup> <a name="MysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```csharp
public double MysqlxConnectTimeout { get; }
```

- *Type:* double

---

##### `MysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```csharp
public double MysqlxDeflateDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```csharp
public double MysqlxDeflateMaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="MysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```csharp
public double MysqlxDocumentIdUniquePrefix { get; }
```

- *Type:* double

---

##### `MysqlxEnableHelloNotice`<sup>Required</sup> <a name="MysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```csharp
public IResolvable MysqlxEnableHelloNotice { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="MysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```csharp
public double MysqlxIdleWorkerThreadTimeout { get; }
```

- *Type:* double

---

##### `MysqlxInteractiveTimeout`<sup>Required</sup> <a name="MysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```csharp
public double MysqlxInteractiveTimeout { get; }
```

- *Type:* double

---

##### `MysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```csharp
public double MysqlxLz4DefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```csharp
public double MysqlxLz4MaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxMaxAllowedPacket`<sup>Required</sup> <a name="MysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```csharp
public double MysqlxMaxAllowedPacket { get; }
```

- *Type:* double

---

##### `MysqlxMinWorkerThreads`<sup>Required</sup> <a name="MysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```csharp
public double MysqlxMinWorkerThreads { get; }
```

- *Type:* double

---

##### `MysqlxReadTimeout`<sup>Required</sup> <a name="MysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout"></a>

```csharp
public double MysqlxReadTimeout { get; }
```

- *Type:* double

---

##### `MysqlxWaitTimeout`<sup>Required</sup> <a name="MysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```csharp
public double MysqlxWaitTimeout { get; }
```

- *Type:* double

---

##### `MysqlxWriteTimeout`<sup>Required</sup> <a name="MysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```csharp
public double MysqlxWriteTimeout { get; }
```

- *Type:* double

---

##### `MysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```csharp
public double MysqlxZstdDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```csharp
public double MysqlxZstdMaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```csharp
public double MysqlZstdDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `NetReadTimeout`<sup>Required</sup> <a name="NetReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout"></a>

```csharp
public double NetReadTimeout { get; }
```

- *Type:* double

---

##### `NetWriteTimeout`<sup>Required</sup> <a name="NetWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout"></a>

```csharp
public double NetWriteTimeout { get; }
```

- *Type:* double

---

##### `ParserMaxMemSize`<sup>Required</sup> <a name="ParserMaxMemSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize"></a>

```csharp
public string ParserMaxMemSize { get; }
```

- *Type:* string

---

##### `QueryAllocBlockSize`<sup>Required</sup> <a name="QueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize"></a>

```csharp
public string QueryAllocBlockSize { get; }
```

- *Type:* string

---

##### `QueryPreallocSize`<sup>Required</sup> <a name="QueryPreallocSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize"></a>

```csharp
public string QueryPreallocSize { get; }
```

- *Type:* string

---

##### `RegexpTimeLimit`<sup>Required</sup> <a name="RegexpTimeLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit"></a>

```csharp
public double RegexpTimeLimit { get; }
```

- *Type:* double

---

##### `SortBufferSize`<sup>Required</sup> <a name="SortBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize"></a>

```csharp
public string SortBufferSize { get; }
```

- *Type:* string

---

##### `SqlMode`<sup>Required</sup> <a name="SqlMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlMode"></a>

```csharp
public string SqlMode { get; }
```

- *Type:* string

---

##### `SqlRequirePrimaryKey`<sup>Required</sup> <a name="SqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```csharp
public IResolvable SqlRequirePrimaryKey { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SqlWarnings`<sup>Required</sup> <a name="SqlWarnings" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings"></a>

```csharp
public IResolvable SqlWarnings { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ThreadPoolDedicatedListeners`<sup>Required</sup> <a name="ThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```csharp
public IResolvable ThreadPoolDedicatedListeners { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ThreadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="ThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```csharp
public double ThreadPoolMaxTransactionsLimit { get; }
```

- *Type:* double

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TmpTableSize`<sup>Required</sup> <a name="TmpTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize"></a>

```csharp
public string TmpTableSize { get; }
```

- *Type:* string

---

##### `TransactionIsolation`<sup>Required</sup> <a name="TransactionIsolation" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation"></a>

```csharp
public string TransactionIsolation { get; }
```

- *Type:* string

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout"></a>

```csharp
public double WaitTimeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlConfigurationVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables">DataOciMysqlMysqlConfigurationVariables</a>

---



