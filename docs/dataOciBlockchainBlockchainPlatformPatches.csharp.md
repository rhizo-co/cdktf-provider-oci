# `dataOciBlockchainBlockchainPlatformPatches` Submodule <a name="`dataOciBlockchainBlockchainPlatformPatches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatformPatches <a name="DataOciBlockchainBlockchainPlatformPatches" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches oci_blockchain_blockchain_platform_patches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatches(Construct Scope, string Id, DataOciBlockchainBlockchainPlatformPatchesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig">DataOciBlockchainBlockchainPlatformPatchesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig">DataOciBlockchainBlockchainPlatformPatchesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatformPatches resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatformPatches.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatformPatches.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatformPatches.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatformPatches.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatformPatches resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatformPatches to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBlockchainBlockchainPlatformPatches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatformPatches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformPatchCollection">BlockchainPlatformPatchCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList">DataOciBlockchainBlockchainPlatformPatchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformIdInput">BlockchainPlatformIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformId">BlockchainPlatformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BlockchainPlatformPatchCollection`<sup>Required</sup> <a name="BlockchainPlatformPatchCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformPatchCollection"></a>

```csharp
public DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList BlockchainPlatformPatchCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filter"></a>

```csharp
public DataOciBlockchainBlockchainPlatformPatchesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList">DataOciBlockchainBlockchainPlatformPatchesFilterList</a>

---

##### `BlockchainPlatformIdInput`<sup>Optional</sup> <a name="BlockchainPlatformIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformIdInput"></a>

```csharp
public string BlockchainPlatformIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `BlockchainPlatformId`<sup>Required</sup> <a name="BlockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.blockchainPlatformId"></a>

```csharp
public string BlockchainPlatformId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatches.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection {

};
```


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems {

};
```


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems {

};
```


### DataOciBlockchainBlockchainPlatformPatchesConfig <a name="DataOciBlockchainBlockchainPlatformPatchesConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BlockchainPlatformId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.blockchainPlatformId">BlockchainPlatformId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#blockchain_platform_id DataOciBlockchainBlockchainPlatformPatches#blockchain_platform_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#id DataOciBlockchainBlockchainPlatformPatches#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BlockchainPlatformId`<sup>Required</sup> <a name="BlockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.blockchainPlatformId"></a>

```csharp
public string BlockchainPlatformId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#blockchain_platform_id DataOciBlockchainBlockchainPlatformPatches#blockchain_platform_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#filter DataOciBlockchainBlockchainPlatformPatches#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#id DataOciBlockchainBlockchainPlatformPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBlockchainBlockchainPlatformPatchesFilter <a name="DataOciBlockchainBlockchainPlatformPatchesFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#name DataOciBlockchainBlockchainPlatformPatches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#values DataOciBlockchainBlockchainPlatformPatches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#regex DataOciBlockchainBlockchainPlatformPatches#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#name DataOciBlockchainBlockchainPlatformPatches#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#values DataOciBlockchainBlockchainPlatformPatches#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform_patches#regex DataOciBlockchainBlockchainPlatformPatches#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.patchInfoUrl">PatchInfoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.serviceVersion">ServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.timePatchDue">TimePatchDue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PatchInfoUrl`<sup>Required</sup> <a name="PatchInfoUrl" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.patchInfoUrl"></a>

```csharp
public string PatchInfoUrl { get; }
```

- *Type:* string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.serviceVersion"></a>

```csharp
public string ServiceVersion { get; }
```

- *Type:* string

---

##### `TimePatchDue`<sup>Required</sup> <a name="TimePatchDue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.timePatchDue"></a>

```csharp
public string TimePatchDue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItems</a>

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.items"></a>

```csharp
public DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItems</a>

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.items"></a>

```csharp
public DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection">DataOciBlockchainBlockchainPlatformPatchesBlockchainPlatformPatchCollection</a>

---


### DataOciBlockchainBlockchainPlatformPatchesFilterList <a name="DataOciBlockchainBlockchainPlatformPatchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference <a name="DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatformPatches.DataOciBlockchainBlockchainPlatformPatchesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



