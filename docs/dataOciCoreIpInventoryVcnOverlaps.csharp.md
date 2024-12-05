# `dataOciCoreIpInventoryVcnOverlaps` Submodule <a name="`dataOciCoreIpInventoryVcnOverlaps` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventoryVcnOverlaps <a name="DataOciCoreIpInventoryVcnOverlaps" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps oci_core_ip_inventory_vcn_overlaps}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventoryVcnOverlaps(Construct Scope, string Id, DataOciCoreIpInventoryVcnOverlapsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig">DataOciCoreIpInventoryVcnOverlapsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig">DataOciCoreIpInventoryVcnOverlapsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpInventoryVcnOverlaps.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpInventoryVcnOverlaps.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpInventoryVcnOverlaps.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpInventoryVcnOverlaps.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpInventoryVcnOverlaps to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpInventoryVcnOverlaps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventoryVcnOverlaps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary">IpInventoryVcnOverlapSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount">OverlapCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput">CompartmentListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput">RegionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput">VcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList">CompartmentList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList">RegionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter"></a>

```csharp
public DataOciCoreIpInventoryVcnOverlapsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a>

---

##### `IpInventoryVcnOverlapSummary`<sup>Required</sup> <a name="IpInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary"></a>

```csharp
public DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList IpInventoryVcnOverlapSummary { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a>

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `OverlapCount`<sup>Required</sup> <a name="OverlapCount" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount"></a>

```csharp
public double OverlapCount { get; }
```

- *Type:* double

---

##### `CompartmentListInput`<sup>Optional</sup> <a name="CompartmentListInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput"></a>

```csharp
public string[] CompartmentListInput { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionListInput`<sup>Optional</sup> <a name="RegionListInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput"></a>

```csharp
public string[] RegionListInput { get; }
```

- *Type:* string[]

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput"></a>

```csharp
public string VcnIdInput { get; }
```

- *Type:* string

---

##### `CompartmentList`<sup>Required</sup> <a name="CompartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList"></a>

```csharp
public string[] CompartmentList { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList"></a>

```csharp
public string[] RegionList { get; }
```

- *Type:* string[]

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventoryVcnOverlapsConfig <a name="DataOciCoreIpInventoryVcnOverlapsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventoryVcnOverlapsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] CompartmentList,
    string[] RegionList,
    string VcnId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList">CompartmentList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList">RegionList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId">VcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentList`<sup>Required</sup> <a name="CompartmentList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList"></a>

```csharp
public string[] CompartmentList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}.

---

##### `RegionList`<sup>Required</sup> <a name="RegionList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList"></a>

```csharp
public string[] RegionList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId"></a>

```csharp
public string VcnId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#filter DataOciCoreIpInventoryVcnOverlaps#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventoryVcnOverlapsFilter <a name="DataOciCoreIpInventoryVcnOverlapsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventoryVcnOverlapsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}.

---

### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventoryVcnOverlapsFilterList <a name="DataOciCoreIpInventoryVcnOverlapsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventoryVcnOverlapsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get"></a>

```csharp
private DataOciCoreIpInventoryVcnOverlapsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreIpInventoryVcnOverlapsFilterOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventoryVcnOverlapsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get"></a>

```csharp
private DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr">OverlappingCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId">OverlappingVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName">OverlappingVcnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `OverlappingCidr`<sup>Required</sup> <a name="OverlappingCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr"></a>

```csharp
public string OverlappingCidr { get; }
```

- *Type:* string

---

##### `OverlappingVcnId`<sup>Required</sup> <a name="OverlappingVcnId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId"></a>

```csharp
public string OverlappingVcnId { get; }
```

- *Type:* string

---

##### `OverlappingVcnName`<sup>Required</sup> <a name="OverlappingVcnName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName"></a>

```csharp
public string OverlappingVcnName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a>

---



