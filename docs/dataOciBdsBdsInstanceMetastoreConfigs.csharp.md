# `dataOciBdsBdsInstanceMetastoreConfigs` Submodule <a name="`dataOciBdsBdsInstanceMetastoreConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceMetastoreConfigs <a name="DataOciBdsBdsInstanceMetastoreConfigs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs oci_bds_bds_instance_metastore_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceMetastoreConfigs(Construct Scope, string Id, DataOciBdsBdsInstanceMetastoreConfigsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig">DataOciBdsBdsInstanceMetastoreConfigsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig">DataOciBdsBdsInstanceMetastoreConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetBdsApiKeyId">ResetBdsApiKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreType">ResetMetastoreType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetBdsApiKeyId` <a name="ResetBdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetBdsApiKeyId"></a>

```csharp
private void ResetBdsApiKeyId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetMetastoreType` <a name="ResetMetastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreType"></a>

```csharp
private void ResetMetastoreType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceMetastoreConfigs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceMetastoreConfigs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceMetastoreConfigs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceMetastoreConfigs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfigs resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceMetastoreConfigs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceMetastoreConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceMetastoreConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsMetastoreConfigurations">BdsMetastoreConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList">DataOciBdsBdsInstanceMetastoreConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyIdInput">BdsApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreTypeInput">MetastoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyId">BdsApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreType">MetastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BdsMetastoreConfigurations`<sup>Required</sup> <a name="BdsMetastoreConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsMetastoreConfigurations"></a>

```csharp
public DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList BdsMetastoreConfigurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filter"></a>

```csharp
public DataOciBdsBdsInstanceMetastoreConfigsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList">DataOciBdsBdsInstanceMetastoreConfigsFilterList</a>

---

##### `BdsApiKeyIdInput`<sup>Optional</sup> <a name="BdsApiKeyIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyIdInput"></a>

```csharp
public string BdsApiKeyIdInput { get; }
```

- *Type:* string

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceIdInput"></a>

```csharp
public string BdsInstanceIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `MetastoreTypeInput`<sup>Optional</sup> <a name="MetastoreTypeInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreTypeInput"></a>

```csharp
public string MetastoreTypeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `BdsApiKeyId`<sup>Required</sup> <a name="BdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyId"></a>

```csharp
public string BdsApiKeyId { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `MetastoreType`<sup>Required</sup> <a name="MetastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreType"></a>

```csharp
public string MetastoreType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations {

};
```


### DataOciBdsBdsInstanceMetastoreConfigsConfig <a name="DataOciBdsBdsInstanceMetastoreConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceMetastoreConfigsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BdsInstanceId,
    string BdsApiKeyId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string MetastoreId = null,
    string MetastoreType = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsApiKeyId">BdsApiKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreType">MetastoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}.

---

##### `BdsApiKeyId`<sup>Optional</sup> <a name="BdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsApiKeyId"></a>

```csharp
public string BdsApiKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#filter DataOciBdsBdsInstanceMetastoreConfigs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}.

---

##### `MetastoreType`<sup>Optional</sup> <a name="MetastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreType"></a>

```csharp
public string MetastoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}.

---

### DataOciBdsBdsInstanceMetastoreConfigsFilter <a name="DataOciBdsBdsInstanceMetastoreConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceMetastoreConfigsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#name DataOciBdsBdsInstanceMetastoreConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#values DataOciBdsBdsInstanceMetastoreConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#regex DataOciBdsBdsInstanceMetastoreConfigs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#name DataOciBdsBdsInstanceMetastoreConfigs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#values DataOciBdsBdsInstanceMetastoreConfigs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#regex DataOciBdsBdsInstanceMetastoreConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get"></a>

```csharp
private DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.activateTrigger">ActivateTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyId">BdsApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyPassphrase">BdsApiKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreType">MetastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivateTrigger`<sup>Required</sup> <a name="ActivateTrigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.activateTrigger"></a>

```csharp
public double ActivateTrigger { get; }
```

- *Type:* double

---

##### `BdsApiKeyId`<sup>Required</sup> <a name="BdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyId"></a>

```csharp
public string BdsApiKeyId { get; }
```

- *Type:* string

---

##### `BdsApiKeyPassphrase`<sup>Required</sup> <a name="BdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyPassphrase"></a>

```csharp
public string BdsApiKeyPassphrase { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.clusterAdminPassword"></a>

```csharp
public string ClusterAdminPassword { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `MetastoreType`<sup>Required</sup> <a name="MetastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreType"></a>

```csharp
public string MetastoreType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations</a>

---


### DataOciBdsBdsInstanceMetastoreConfigsFilterList <a name="DataOciBdsBdsInstanceMetastoreConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceMetastoreConfigsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get"></a>

```csharp
private DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference <a name="DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



