# `dataOciMysqlMysqlConfigurations` Submodule <a name="`dataOciMysqlMysqlConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlConfigurations <a name="DataOciMysqlMysqlConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations oci_mysql_mysql_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurations(Construct Scope, string Id, DataOciMysqlMysqlConfigurationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig">DataOciMysqlMysqlConfigurationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig">DataOciMysqlMysqlConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName">ResetShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId"></a>

```csharp
private void ResetConfigurationId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShapeName` <a name="ResetShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName"></a>

```csharp
private void ResetShapeName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlConfigurations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlConfigurations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlConfigurations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciMysqlMysqlConfigurations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMysqlMysqlConfigurations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMysqlMysqlConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput">ShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput">TypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId">ConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type">Type</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations"></a>

```csharp
public DataOciMysqlMysqlConfigurationsConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter"></a>

```csharp
public DataOciMysqlMysqlConfigurationsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput"></a>

```csharp
public string ConfigurationIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput"></a>

```csharp
public string ShapeNameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput"></a>

```csharp
public string[] TypeInput { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId"></a>

```csharp
public string ConfigurationId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type"></a>

```csharp
public string[] Type { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlConfigurationsConfig <a name="DataOciMysqlMysqlConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ConfigurationId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string ShapeName = null,
    string State = null,
    string[] Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId">ConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName">ShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type">Type</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}.

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId"></a>

```csharp
public string ConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#filter DataOciMysqlMysqlConfigurations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShapeName`<sup>Optional</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName"></a>

```csharp
public string ShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type"></a>

```csharp
public string[] Type { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}.

---

### DataOciMysqlMysqlConfigurationsConfigurations <a name="DataOciMysqlMysqlConfigurationsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurations {

};
```


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurationsInitVariables {

};
```


### DataOciMysqlMysqlConfigurationsConfigurationsVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurationsVariables {

};
```


### DataOciMysqlMysqlConfigurationsFilter <a name="DataOciMysqlMysqlConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get"></a>

```csharp
private DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LowerCaseTableNames`<sup>Required</sup> <a name="LowerCaseTableNames" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```csharp
public string LowerCaseTableNames { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlConfigurationsConfigurationsInitVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsList <a name="DataOciMysqlMysqlConfigurationsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get"></a>

```csharp
private DataOciMysqlMysqlConfigurationsConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationsConfigurationsOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables">InitVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId">ParentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitVariables`<sup>Required</sup> <a name="InitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables"></a>

```csharp
public DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList InitVariables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a>

---

##### `ParentConfigurationId`<sup>Required</sup> <a name="ParentConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId"></a>

```csharp
public string ParentConfigurationId { get; }
```

- *Type:* string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables"></a>

```csharp
public DataOciMysqlMysqlConfigurationsConfigurationsVariablesList Variables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlConfigurationsConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurationsVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get"></a>

```csharp
private DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit">Autocommit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables">BigTables</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds">BinlogExpireLogsSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata">BinlogRowMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions">BinlogRowValueOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression">BinlogTransactionCompression</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType">CompletionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize">ConnectionMemoryChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit">ConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth">CteMaxRecursionDepth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin">DefaultAuthenticationPlugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks">ForeignKeyChecks</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength">GeneratedRandomPasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit">GlobalConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking">GlobalConnectionMemoryTracking</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency">GroupReplicationConsistency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct">InnodbBufferPoolDumpPct</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances">InnodbBufferPoolInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize">InnodbBufferPoolSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize">InnodbDdlBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads">InnodbDdlThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword">InnodbFtEnableStopword</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize">InnodbFtMaxTokenSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize">InnodbFtNumWordOptimize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit">InnodbFtResultCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads">InnodbLogWriterThreads</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag">InnodbMaxPurgeLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay">InnodbMaxPurgeLagDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages">InnodbStatsPersistentSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages">InnodbStatsTransientSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile">LocalInfile</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles">MandatoryRoles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize">MaxBinlogCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors">MaxConnectErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime">MaxExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount">MaxPreparedStmtCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode">MysqlFirewallMode</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout">MysqlxConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">MysqlxDeflateDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">MysqlxDeflateMaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">MysqlxDocumentIdUniquePrefix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice">MysqlxEnableHelloNotice</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">MysqlxIdleWorkerThreadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout">MysqlxInteractiveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">MysqlxLz4DefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">MysqlxLz4MaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket">MysqlxMaxAllowedPacket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads">MysqlxMinWorkerThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout">MysqlxReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout">MysqlxWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout">MysqlxWriteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">MysqlxZstdDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">MysqlxZstdMaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">MysqlZstdDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout">NetReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize">ParserMaxMemSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize">QueryAllocBlockSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize">QueryPreallocSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit">RegexpTimeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize">SortBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode">SqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings">SqlWarnings</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners">ThreadPoolDedicatedListeners</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit">ThreadPoolMaxTransactionsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize">TmpTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation">TransactionIsolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout">WaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autocommit`<sup>Required</sup> <a name="Autocommit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit"></a>

```csharp
public IResolvable Autocommit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BigTables`<sup>Required</sup> <a name="BigTables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables"></a>

```csharp
public IResolvable BigTables { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BinlogExpireLogsSeconds`<sup>Required</sup> <a name="BinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```csharp
public double BinlogExpireLogsSeconds { get; }
```

- *Type:* double

---

##### `BinlogRowMetadata`<sup>Required</sup> <a name="BinlogRowMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata"></a>

```csharp
public string BinlogRowMetadata { get; }
```

- *Type:* string

---

##### `BinlogRowValueOptions`<sup>Required</sup> <a name="BinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions"></a>

```csharp
public string BinlogRowValueOptions { get; }
```

- *Type:* string

---

##### `BinlogTransactionCompression`<sup>Required</sup> <a name="BinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression"></a>

```csharp
public IResolvable BinlogTransactionCompression { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CompletionType`<sup>Required</sup> <a name="CompletionType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType"></a>

```csharp
public string CompletionType { get; }
```

- *Type:* string

---

##### `ConnectionMemoryChunkSize`<sup>Required</sup> <a name="ConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```csharp
public double ConnectionMemoryChunkSize { get; }
```

- *Type:* double

---

##### `ConnectionMemoryLimit`<sup>Required</sup> <a name="ConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit"></a>

```csharp
public string ConnectionMemoryLimit { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `CteMaxRecursionDepth`<sup>Required</sup> <a name="CteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```csharp
public string CteMaxRecursionDepth { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationPlugin`<sup>Required</sup> <a name="DefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```csharp
public string DefaultAuthenticationPlugin { get; }
```

- *Type:* string

---

##### `ForeignKeyChecks`<sup>Required</sup> <a name="ForeignKeyChecks" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks"></a>

```csharp
public IResolvable ForeignKeyChecks { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `GeneratedRandomPasswordLength`<sup>Required</sup> <a name="GeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```csharp
public double GeneratedRandomPasswordLength { get; }
```

- *Type:* double

---

##### `GlobalConnectionMemoryLimit`<sup>Required</sup> <a name="GlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```csharp
public string GlobalConnectionMemoryLimit { get; }
```

- *Type:* string

---

##### `GlobalConnectionMemoryTracking`<sup>Required</sup> <a name="GlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```csharp
public IResolvable GlobalConnectionMemoryTracking { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `GroupReplicationConsistency`<sup>Required</sup> <a name="GroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency"></a>

```csharp
public string GroupReplicationConsistency { get; }
```

- *Type:* string

---

##### `InformationSchemaStatsExpiry`<sup>Required</sup> <a name="InformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```csharp
public double InformationSchemaStatsExpiry { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolDumpPct`<sup>Required</sup> <a name="InnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```csharp
public double InnodbBufferPoolDumpPct { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolInstances`<sup>Required</sup> <a name="InnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```csharp
public double InnodbBufferPoolInstances { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolSize`<sup>Required</sup> <a name="InnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize"></a>

```csharp
public string InnodbBufferPoolSize { get; }
```

- *Type:* string

---

##### `InnodbDdlBufferSize`<sup>Required</sup> <a name="InnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize"></a>

```csharp
public string InnodbDdlBufferSize { get; }
```

- *Type:* string

---

##### `InnodbDdlThreads`<sup>Required</sup> <a name="InnodbDdlThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads"></a>

```csharp
public double InnodbDdlThreads { get; }
```

- *Type:* double

---

##### `InnodbFtEnableStopword`<sup>Required</sup> <a name="InnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword"></a>

```csharp
public IResolvable InnodbFtEnableStopword { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InnodbFtMaxTokenSize`<sup>Required</sup> <a name="InnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```csharp
public double InnodbFtMaxTokenSize { get; }
```

- *Type:* double

---

##### `InnodbFtMinTokenSize`<sup>Required</sup> <a name="InnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```csharp
public double InnodbFtMinTokenSize { get; }
```

- *Type:* double

---

##### `InnodbFtNumWordOptimize`<sup>Required</sup> <a name="InnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```csharp
public double InnodbFtNumWordOptimize { get; }
```

- *Type:* double

---

##### `InnodbFtResultCacheLimit`<sup>Required</sup> <a name="InnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```csharp
public string InnodbFtResultCacheLimit { get; }
```

- *Type:* string

---

##### `InnodbFtServerStopwordTable`<sup>Required</sup> <a name="InnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```csharp
public string InnodbFtServerStopwordTable { get; }
```

- *Type:* string

---

##### `InnodbLockWaitTimeout`<sup>Required</sup> <a name="InnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```csharp
public double InnodbLockWaitTimeout { get; }
```

- *Type:* double

---

##### `InnodbLogWriterThreads`<sup>Required</sup> <a name="InnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads"></a>

```csharp
public IResolvable InnodbLogWriterThreads { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InnodbMaxPurgeLag`<sup>Required</sup> <a name="InnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```csharp
public string InnodbMaxPurgeLag { get; }
```

- *Type:* string

---

##### `InnodbMaxPurgeLagDelay`<sup>Required</sup> <a name="InnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```csharp
public double InnodbMaxPurgeLagDelay { get; }
```

- *Type:* double

---

##### `InnodbStatsPersistentSamplePages`<sup>Required</sup> <a name="InnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```csharp
public string InnodbStatsPersistentSamplePages { get; }
```

- *Type:* string

---

##### `InnodbStatsTransientSamplePages`<sup>Required</sup> <a name="InnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```csharp
public string InnodbStatsTransientSamplePages { get; }
```

- *Type:* string

---

##### `InteractiveTimeout`<sup>Required</sup> <a name="InteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout"></a>

```csharp
public double InteractiveTimeout { get; }
```

- *Type:* double

---

##### `LocalInfile`<sup>Required</sup> <a name="LocalInfile" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile"></a>

```csharp
public IResolvable LocalInfile { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MandatoryRoles`<sup>Required</sup> <a name="MandatoryRoles" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles"></a>

```csharp
public string MandatoryRoles { get; }
```

- *Type:* string

---

##### `MaxAllowedPacket`<sup>Required</sup> <a name="MaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket"></a>

```csharp
public double MaxAllowedPacket { get; }
```

- *Type:* double

---

##### `MaxBinlogCacheSize`<sup>Required</sup> <a name="MaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize"></a>

```csharp
public string MaxBinlogCacheSize { get; }
```

- *Type:* string

---

##### `MaxConnectErrors`<sup>Required</sup> <a name="MaxConnectErrors" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors"></a>

```csharp
public string MaxConnectErrors { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxExecutionTime`<sup>Required</sup> <a name="MaxExecutionTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime"></a>

```csharp
public string MaxExecutionTime { get; }
```

- *Type:* string

---

##### `MaxHeapTableSize`<sup>Required</sup> <a name="MaxHeapTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize"></a>

```csharp
public string MaxHeapTableSize { get; }
```

- *Type:* string

---

##### `MaxPreparedStmtCount`<sup>Required</sup> <a name="MaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount"></a>

```csharp
public double MaxPreparedStmtCount { get; }
```

- *Type:* double

---

##### `MysqlFirewallMode`<sup>Required</sup> <a name="MysqlFirewallMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode"></a>

```csharp
public IResolvable MysqlFirewallMode { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MysqlxConnectTimeout`<sup>Required</sup> <a name="MysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```csharp
public double MysqlxConnectTimeout { get; }
```

- *Type:* double

---

##### `MysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```csharp
public double MysqlxDeflateDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```csharp
public double MysqlxDeflateMaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="MysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```csharp
public double MysqlxDocumentIdUniquePrefix { get; }
```

- *Type:* double

---

##### `MysqlxEnableHelloNotice`<sup>Required</sup> <a name="MysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```csharp
public IResolvable MysqlxEnableHelloNotice { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="MysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```csharp
public double MysqlxIdleWorkerThreadTimeout { get; }
```

- *Type:* double

---

##### `MysqlxInteractiveTimeout`<sup>Required</sup> <a name="MysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```csharp
public double MysqlxInteractiveTimeout { get; }
```

- *Type:* double

---

##### `MysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```csharp
public double MysqlxLz4DefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```csharp
public double MysqlxLz4MaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxMaxAllowedPacket`<sup>Required</sup> <a name="MysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```csharp
public double MysqlxMaxAllowedPacket { get; }
```

- *Type:* double

---

##### `MysqlxMinWorkerThreads`<sup>Required</sup> <a name="MysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```csharp
public double MysqlxMinWorkerThreads { get; }
```

- *Type:* double

---

##### `MysqlxReadTimeout`<sup>Required</sup> <a name="MysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout"></a>

```csharp
public double MysqlxReadTimeout { get; }
```

- *Type:* double

---

##### `MysqlxWaitTimeout`<sup>Required</sup> <a name="MysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```csharp
public double MysqlxWaitTimeout { get; }
```

- *Type:* double

---

##### `MysqlxWriteTimeout`<sup>Required</sup> <a name="MysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```csharp
public double MysqlxWriteTimeout { get; }
```

- *Type:* double

---

##### `MysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```csharp
public double MysqlxZstdDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```csharp
public double MysqlxZstdMaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```csharp
public double MysqlZstdDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `NetReadTimeout`<sup>Required</sup> <a name="NetReadTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout"></a>

```csharp
public double NetReadTimeout { get; }
```

- *Type:* double

---

##### `NetWriteTimeout`<sup>Required</sup> <a name="NetWriteTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout"></a>

```csharp
public double NetWriteTimeout { get; }
```

- *Type:* double

---

##### `ParserMaxMemSize`<sup>Required</sup> <a name="ParserMaxMemSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize"></a>

```csharp
public string ParserMaxMemSize { get; }
```

- *Type:* string

---

##### `QueryAllocBlockSize`<sup>Required</sup> <a name="QueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize"></a>

```csharp
public string QueryAllocBlockSize { get; }
```

- *Type:* string

---

##### `QueryPreallocSize`<sup>Required</sup> <a name="QueryPreallocSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize"></a>

```csharp
public string QueryPreallocSize { get; }
```

- *Type:* string

---

##### `RegexpTimeLimit`<sup>Required</sup> <a name="RegexpTimeLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit"></a>

```csharp
public double RegexpTimeLimit { get; }
```

- *Type:* double

---

##### `SortBufferSize`<sup>Required</sup> <a name="SortBufferSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize"></a>

```csharp
public string SortBufferSize { get; }
```

- *Type:* string

---

##### `SqlMode`<sup>Required</sup> <a name="SqlMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode"></a>

```csharp
public string SqlMode { get; }
```

- *Type:* string

---

##### `SqlRequirePrimaryKey`<sup>Required</sup> <a name="SqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```csharp
public IResolvable SqlRequirePrimaryKey { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SqlWarnings`<sup>Required</sup> <a name="SqlWarnings" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings"></a>

```csharp
public IResolvable SqlWarnings { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ThreadPoolDedicatedListeners`<sup>Required</sup> <a name="ThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```csharp
public IResolvable ThreadPoolDedicatedListeners { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ThreadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="ThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```csharp
public double ThreadPoolMaxTransactionsLimit { get; }
```

- *Type:* double

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TmpTableSize`<sup>Required</sup> <a name="TmpTableSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize"></a>

```csharp
public string TmpTableSize { get; }
```

- *Type:* string

---

##### `TransactionIsolation`<sup>Required</sup> <a name="TransactionIsolation" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation"></a>

```csharp
public string TransactionIsolation { get; }
```

- *Type:* string

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout"></a>

```csharp
public double WaitTimeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciMysqlMysqlConfigurationsConfigurationsVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a>

---


### DataOciMysqlMysqlConfigurationsFilterList <a name="DataOciMysqlMysqlConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get"></a>

```csharp
private DataOciMysqlMysqlConfigurationsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciMysqlMysqlConfigurationsFilterOutputReference <a name="DataOciMysqlMysqlConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciMysqlMysqlConfigurationsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



