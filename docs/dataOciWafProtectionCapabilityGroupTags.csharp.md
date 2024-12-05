# `dataOciWafProtectionCapabilityGroupTags` Submodule <a name="`dataOciWafProtectionCapabilityGroupTags` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafProtectionCapabilityGroupTags <a name="DataOciWafProtectionCapabilityGroupTags" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags oci_waf_protection_capability_group_tags}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTags(Construct Scope, string Id, DataOciWafProtectionCapabilityGroupTagsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig">DataOciWafProtectionCapabilityGroupTagsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig">DataOciWafProtectionCapabilityGroupTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWafProtectionCapabilityGroupTags.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWafProtectionCapabilityGroupTags.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWafProtectionCapabilityGroupTags.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciWafProtectionCapabilityGroupTags.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWafProtectionCapabilityGroupTags to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWafProtectionCapabilityGroupTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafProtectionCapabilityGroupTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection">ProtectionCapabilityGroupTagCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter"></a>

```csharp
public DataOciWafProtectionCapabilityGroupTagsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a>

---

##### `ProtectionCapabilityGroupTagCollection`<sup>Required</sup> <a name="ProtectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection"></a>

```csharp
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList ProtectionCapabilityGroupTagCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafProtectionCapabilityGroupTagsConfig <a name="DataOciWafProtectionCapabilityGroupTagsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#filter DataOciWafProtectionCapabilityGroupTags#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}.

---

### DataOciWafProtectionCapabilityGroupTagsFilter <a name="DataOciWafProtectionCapabilityGroupTagsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}.

---

### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection {

};
```


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafProtectionCapabilityGroupTagsFilterList <a name="DataOciWafProtectionCapabilityGroupTagsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get"></a>

```csharp
private DataOciWafProtectionCapabilityGroupTagsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciWafProtectionCapabilityGroupTagsFilterOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get"></a>

```csharp
private DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a>

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get"></a>

```csharp
private DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items"></a>

```csharp
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a>

---



