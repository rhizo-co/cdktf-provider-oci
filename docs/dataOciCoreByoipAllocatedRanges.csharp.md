# `dataOciCoreByoipAllocatedRanges` Submodule <a name="`dataOciCoreByoipAllocatedRanges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreByoipAllocatedRanges <a name="DataOciCoreByoipAllocatedRanges" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges oci_core_byoip_allocated_ranges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRanges(Construct Scope, string Id, DataOciCoreByoipAllocatedRangesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig">DataOciCoreByoipAllocatedRangesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig">DataOciCoreByoipAllocatedRangesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreByoipAllocatedRanges resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreByoipAllocatedRanges.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreByoipAllocatedRanges.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreByoipAllocatedRanges.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreByoipAllocatedRanges.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreByoipAllocatedRanges resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreByoipAllocatedRanges to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreByoipAllocatedRanges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreByoipAllocatedRanges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipAllocatedRangeCollection">ByoipAllocatedRangeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList">DataOciCoreByoipAllocatedRangesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeIdInput">ByoipRangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeId">ByoipRangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ByoipAllocatedRangeCollection`<sup>Required</sup> <a name="ByoipAllocatedRangeCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipAllocatedRangeCollection"></a>

```csharp
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList ByoipAllocatedRangeCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filter"></a>

```csharp
public DataOciCoreByoipAllocatedRangesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList">DataOciCoreByoipAllocatedRangesFilterList</a>

---

##### `ByoipRangeIdInput`<sup>Optional</sup> <a name="ByoipRangeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeIdInput"></a>

```csharp
public string ByoipRangeIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ByoipRangeId`<sup>Required</sup> <a name="ByoipRangeId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.byoipRangeId"></a>

```csharp
public string ByoipRangeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRanges.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection {

};
```


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems {

};
```


### DataOciCoreByoipAllocatedRangesConfig <a name="DataOciCoreByoipAllocatedRangesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ByoipRangeId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.byoipRangeId">ByoipRangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ByoipRangeId`<sup>Required</sup> <a name="ByoipRangeId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.byoipRangeId"></a>

```csharp
public string ByoipRangeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#byoip_range_id DataOciCoreByoipAllocatedRanges#byoip_range_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#filter DataOciCoreByoipAllocatedRanges#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#id DataOciCoreByoipAllocatedRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreByoipAllocatedRangesFilter <a name="DataOciCoreByoipAllocatedRangesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#name DataOciCoreByoipAllocatedRanges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#values DataOciCoreByoipAllocatedRanges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#regex DataOciCoreByoipAllocatedRanges#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#name DataOciCoreByoipAllocatedRanges#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#values DataOciCoreByoipAllocatedRanges#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_byoip_allocated_ranges#regex DataOciCoreByoipAllocatedRanges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get"></a>

```csharp
private DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.publicIpPoolId">PublicIpPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `PublicIpPoolId`<sup>Required</sup> <a name="PublicIpPoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.publicIpPoolId"></a>

```csharp
public string PublicIpPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItems</a>

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get"></a>

```csharp
private DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference <a name="DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.items"></a>

```csharp
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection">DataOciCoreByoipAllocatedRangesByoipAllocatedRangeCollection</a>

---


### DataOciCoreByoipAllocatedRangesFilterList <a name="DataOciCoreByoipAllocatedRangesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get"></a>

```csharp
private DataOciCoreByoipAllocatedRangesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreByoipAllocatedRangesFilterOutputReference <a name="DataOciCoreByoipAllocatedRangesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreByoipAllocatedRangesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreByoipAllocatedRanges.DataOciCoreByoipAllocatedRangesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



