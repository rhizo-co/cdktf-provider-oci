# `dataOciBlockchainBlockchainPlatforms` Submodule <a name="`dataOciBlockchainBlockchainPlatforms` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatforms <a name="DataOciBlockchainBlockchainPlatforms" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms oci_blockchain_blockchain_platforms}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatforms(Construct Scope, string Id, DataOciBlockchainBlockchainPlatformsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig">DataOciBlockchainBlockchainPlatformsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig">DataOciBlockchainBlockchainPlatformsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatforms.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatforms.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatforms.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatforms.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatforms to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBlockchainBlockchainPlatforms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatforms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection">BlockchainPlatformCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BlockchainPlatformCollection`<sup>Required</sup> <a name="BlockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList BlockchainPlatformCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection {

};
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems {

};
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails {

};
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns {

};
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam {

};
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers {

};
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam {

};
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo {

};
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas {

};
```


### DataOciBlockchainBlockchainPlatformsConfig <a name="DataOciBlockchainBlockchainPlatformsConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#filter DataOciBlockchainBlockchainPlatforms#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}.

---

### DataOciBlockchainBlockchainPlatformsFilter <a name="DataOciBlockchainBlockchainPlatformsFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```csharp
public double OcpuAllocationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad">Ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey">OsnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad"></a>

```csharp
public string Ad { get; }
```

- *Type:* string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList OcpuAllocationParam { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `OsnKey`<sup>Required</sup> <a name="OsnKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey"></a>

```csharp
public string OsnKey { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns">Osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers">Peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Osns`<sup>Required</sup> <a name="Osns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList Osns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a>

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList Peers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```csharp
public double OcpuAllocationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad">Ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey">PeerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad"></a>

```csharp
public string Ad { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList OcpuAllocationParam { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `PeerKey`<sup>Required</sup> <a name="PeerKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey"></a>

```csharp
public string PeerKey { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">OcpuCapacityNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">OcpuUtilizationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `OcpuCapacityNumber`<sup>Required</sup> <a name="OcpuCapacityNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```csharp
public double OcpuCapacityNumber { get; }
```

- *Type:* double

---

##### `OcpuUtilizationNumber`<sup>Required</sup> <a name="OcpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```csharp
public double OcpuUtilizationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText">CaCertArchiveText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails">ComponentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape">ComputeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId">FederatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo">HostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol">IsByol</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd">IsMultiAd</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape">LoadBalancerShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole">PlatformRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType">PlatformShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas">Replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion">ServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs">StorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs">StorageUsedInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity">TotalOcpuCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCertArchiveText`<sup>Required</sup> <a name="CaCertArchiveText" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText"></a>

```csharp
public string CaCertArchiveText { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComponentDetails`<sup>Required</sup> <a name="ComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList ComponentDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a>

---

##### `ComputeShape`<sup>Required</sup> <a name="ComputeShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape"></a>

```csharp
public string ComputeShape { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FederatedUserId`<sup>Required</sup> <a name="FederatedUserId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId"></a>

```csharp
public string FederatedUserId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HostOcpuUtilizationInfo`<sup>Required</sup> <a name="HostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList HostOcpuUtilizationInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken"></a>

```csharp
public string IdcsAccessToken { get; }
```

- *Type:* string

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol"></a>

```csharp
public IResolvable IsByol { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMultiAd`<sup>Required</sup> <a name="IsMultiAd" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd"></a>

```csharp
public IResolvable IsMultiAd { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LoadBalancerShape`<sup>Required</sup> <a name="LoadBalancerShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape"></a>

```csharp
public string LoadBalancerShape { get; }
```

- *Type:* string

---

##### `PlatformRole`<sup>Required</sup> <a name="PlatformRole" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole"></a>

```csharp
public string PlatformRole { get; }
```

- *Type:* string

---

##### `PlatformShapeType`<sup>Required</sup> <a name="PlatformShapeType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType"></a>

```csharp
public string PlatformShapeType { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList Replicas { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a>

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint"></a>

```csharp
public string ServiceEndpoint { get; }
```

- *Type:* string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion"></a>

```csharp
public string ServiceVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageSizeInTbs`<sup>Required</sup> <a name="StorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs"></a>

```csharp
public double StorageSizeInTbs { get; }
```

- *Type:* double

---

##### `StorageUsedInTbs`<sup>Required</sup> <a name="StorageUsedInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs"></a>

```csharp
public double StorageUsedInTbs { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalOcpuCapacity`<sup>Required</sup> <a name="TotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity"></a>

```csharp
public double TotalOcpuCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount">CaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount">ConsoleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount">ProxyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCount`<sup>Required</sup> <a name="CaCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount"></a>

```csharp
public double CaCount { get; }
```

- *Type:* double

---

##### `ConsoleCount`<sup>Required</sup> <a name="ConsoleCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount"></a>

```csharp
public double ConsoleCount { get; }
```

- *Type:* double

---

##### `ProxyCount`<sup>Required</sup> <a name="ProxyCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount"></a>

```csharp
public double ProxyCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a>

---


### DataOciBlockchainBlockchainPlatformsFilterList <a name="DataOciBlockchainBlockchainPlatformsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciBlockchainBlockchainPlatformsFilterOutputReference <a name="DataOciBlockchainBlockchainPlatformsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



