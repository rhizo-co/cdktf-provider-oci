# `dataOciCapacityManagementOccAvailabilityCatalog` Submodule <a name="`dataOciCapacityManagementOccAvailabilityCatalog` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccAvailabilityCatalog <a name="DataOciCapacityManagementOccAvailabilityCatalog" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog oci_capacity_management_occ_availability_catalog}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalog(Construct Scope, string Id, DataOciCapacityManagementOccAvailabilityCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig">DataOciCapacityManagementOccAvailabilityCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig">DataOciCapacityManagementOccAvailabilityCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccAvailabilityCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccAvailabilityCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccAvailabilityCatalog.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccAvailabilityCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccAvailabilityCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccAvailabilityCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccAvailabilityCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails">Base64EncodedCatalogDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.catalogState">CatalogState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList">DataOciCapacityManagementOccAvailabilityCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.metadataDetails">MetadataDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occAvailabilityCatalogIdInput">OccAvailabilityCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Base64EncodedCatalogDetails`<sup>Required</sup> <a name="Base64EncodedCatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails"></a>

```csharp
public string Base64EncodedCatalogDetails { get; }
```

- *Type:* string

---

##### `CatalogState`<sup>Required</sup> <a name="CatalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.catalogState"></a>

```csharp
public string CatalogState { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.details"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList">DataOciCapacityManagementOccAvailabilityCatalogDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MetadataDetails`<sup>Required</sup> <a name="MetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.metadataDetails"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList MetadataDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `OccAvailabilityCatalogIdInput`<sup>Optional</sup> <a name="OccAvailabilityCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occAvailabilityCatalogIdInput"></a>

```csharp
public string OccAvailabilityCatalogIdInput { get; }
```

- *Type:* string

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.occAvailabilityCatalogId"></a>

```csharp
public string OccAvailabilityCatalogId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogConfig <a name="DataOciCapacityManagementOccAvailabilityCatalogConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OccAvailabilityCatalogId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.occAvailabilityCatalogId">OccAvailabilityCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalog#occ_availability_catalog_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OccAvailabilityCatalogId`<sup>Required</sup> <a name="OccAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogConfig.property.occAvailabilityCatalogId"></a>

```csharp
public string OccAvailabilityCatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalog#occ_availability_catalog_id}.

---

### DataOciCapacityManagementOccAvailabilityCatalogDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogDetails {

};
```


### DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccAvailabilityCatalogDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.get"></a>

```csharp
private DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity">AvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder">DateFinalCustomerOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity">DemandedQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity">TotalAvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails">DataOciCapacityManagementOccAvailabilityCatalogDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableQuantity`<sup>Required</sup> <a name="AvailableQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity"></a>

```csharp
public string AvailableQuantity { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover"></a>

```csharp
public string DateExpectedCapacityHandover { get; }
```

- *Type:* string

---

##### `DateFinalCustomerOrder`<sup>Required</sup> <a name="DateFinalCustomerOrder" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder"></a>

```csharp
public string DateFinalCustomerOrder { get; }
```

- *Type:* string

---

##### `DemandedQuantity`<sup>Required</sup> <a name="DemandedQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity"></a>

```csharp
public string DemandedQuantity { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TotalAvailableQuantity`<sup>Required</sup> <a name="TotalAvailableQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity"></a>

```csharp
public string TotalAvailableQuantity { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogDetails">DataOciCapacityManagementOccAvailabilityCatalogDetails</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.get"></a>

```csharp
private DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion">FormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatVersion`<sup>Required</sup> <a name="FormatVersion" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion"></a>

```csharp
public string FormatVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalog.DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---



