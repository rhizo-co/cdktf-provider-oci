# `dataOciCapacityManagementOccHandoverResourceBlockDetails` Submodule <a name="`dataOciCapacityManagementOccHandoverResourceBlockDetails` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetails <a name="DataOciCapacityManagementOccHandoverResourceBlockDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details oci_capacity_management_occ_handover_resource_block_details}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetails(Construct Scope, string Id, DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig">DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig">DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetHostId` <a name="ResetHostId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetHostId"></a>

```csharp
private void ResetHostId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccHandoverResourceBlockDetails.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccHandoverResourceBlockDetails.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccHandoverResourceBlockDetails.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccHandoverResourceBlockDetails.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccHandoverResourceBlockDetails to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccHandoverResourceBlockDetails that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccHandoverResourceBlockDetails to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockDetailCollection">OccHandoverResourceBlockDetailCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostIdInput">HostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockIdInput">OccHandoverResourceBlockIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filter"></a>

```csharp
public DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList</a>

---

##### `OccHandoverResourceBlockDetailCollection`<sup>Required</sup> <a name="OccHandoverResourceBlockDetailCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockDetailCollection"></a>

```csharp
public DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList OccHandoverResourceBlockDetailCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostIdInput"></a>

```csharp
public string HostIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OccHandoverResourceBlockIdInput`<sup>Optional</sup> <a name="OccHandoverResourceBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockIdInput"></a>

```csharp
public string OccHandoverResourceBlockIdInput { get; }
```

- *Type:* string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockId"></a>

```csharp
public string OccHandoverResourceBlockId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OccHandoverResourceBlockId,
    object Filter = null,
    string HostId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.occHandoverResourceBlockId">OccHandoverResourceBlockId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlockDetails#occ_handover_resource_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.hostId">HostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#host_id DataOciCapacityManagementOccHandoverResourceBlockDetails#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#id DataOciCapacityManagementOccHandoverResourceBlockDetails#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OccHandoverResourceBlockId`<sup>Required</sup> <a name="OccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.occHandoverResourceBlockId"></a>

```csharp
public string OccHandoverResourceBlockId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlockDetails#occ_handover_resource_block_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#filter DataOciCapacityManagementOccHandoverResourceBlockDetails#filter}

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.hostId"></a>

```csharp
public string HostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#host_id DataOciCapacityManagementOccHandoverResourceBlockDetails#host_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#id DataOciCapacityManagementOccHandoverResourceBlockDetails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#name DataOciCapacityManagementOccHandoverResourceBlockDetails#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#values DataOciCapacityManagementOccHandoverResourceBlockDetails#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#regex DataOciCapacityManagementOccHandoverResourceBlockDetails#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#name DataOciCapacityManagementOccHandoverResourceBlockDetails#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#values DataOciCapacityManagementOccHandoverResourceBlockDetails#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#regex DataOciCapacityManagementOccHandoverResourceBlockDetails#regex}.

---

### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection {

};
```


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get"></a>

```csharp
private DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get"></a>

```csharp
private DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.details">Details</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.occResourceHandoverBlockId">OccResourceHandoverBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.details"></a>

```csharp
public StringMap Details { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OccResourceHandoverBlockId`<sup>Required</sup> <a name="OccResourceHandoverBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.occResourceHandoverBlockId"></a>

```csharp
public string OccResourceHandoverBlockId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems</a>

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get"></a>

```csharp
private DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.items"></a>

```csharp
public DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection</a>

---



