# `dataOciDataSafeDatabaseSecurityConfig` Submodule <a name="`dataOciDataSafeDatabaseSecurityConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDatabaseSecurityConfig <a name="DataOciDataSafeDatabaseSecurityConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config oci_data_safe_database_security_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDatabaseSecurityConfig(Construct Scope, string Id, DataOciDataSafeDatabaseSecurityConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig">DataOciDataSafeDatabaseSecurityConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig">DataOciDataSafeDatabaseSecurityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDatabaseSecurityConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDatabaseSecurityConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDatabaseSecurityConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDatabaseSecurityConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDatabaseSecurityConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDatabaseSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDatabaseSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.sqlFirewallConfig">SqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeLastRefreshed">TimeLastRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput">DatabaseSecurityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.refreshTrigger"></a>

```csharp
public double RefreshTrigger { get; }
```

- *Type:* double

---

##### `SqlFirewallConfig`<sup>Required</sup> <a name="SqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.sqlFirewallConfig"></a>

```csharp
public DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList SqlFirewallConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastRefreshed`<sup>Required</sup> <a name="TimeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeLastRefreshed"></a>

```csharp
public string TimeLastRefreshed { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DatabaseSecurityConfigIdInput`<sup>Optional</sup> <a name="DatabaseSecurityConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput"></a>

```csharp
public string DatabaseSecurityConfigIdInput { get; }
```

- *Type:* string

---

##### `DatabaseSecurityConfigId`<sup>Required</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId"></a>

```csharp
public string DatabaseSecurityConfigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDatabaseSecurityConfigConfig <a name="DataOciDataSafeDatabaseSecurityConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDatabaseSecurityConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseSecurityConfigId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseSecurityConfigId`<sup>Required</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId"></a>

```csharp
public string DatabaseSecurityConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}.

---

### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get"></a>

```csharp
private DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob">ExcludeJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge">ViolationLogAutoPurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeJob`<sup>Required</sup> <a name="ExcludeJob" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob"></a>

```csharp
public string ExcludeJob { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```csharp
public string TimeStatusUpdated { get; }
```

- *Type:* string

---

##### `ViolationLogAutoPurge`<sup>Required</sup> <a name="ViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```csharp
public string ViolationLogAutoPurge { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---



