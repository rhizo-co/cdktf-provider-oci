# `dataOciCapacityManagementOccAvailabilityCatalogs` Submodule <a name="`dataOciCapacityManagementOccAvailabilityCatalogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogs <a name="DataOciCapacityManagementOccAvailabilityCatalogs" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs oci_capacity_management_occ_availability_catalogs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogs(Construct Scope, string Id, DataOciCapacityManagementOccAvailabilityCatalogsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig">DataOciCapacityManagementOccAvailabilityCatalogsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig">DataOciCapacityManagementOccAvailabilityCatalogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetCatalogState">ResetCatalogState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCatalogState` <a name="ResetCatalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetCatalogState"></a>

```csharp
private void ResetCatalogState()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccAvailabilityCatalogs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccAvailabilityCatalogs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccAvailabilityCatalogs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCapacityManagementOccAvailabilityCatalogs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccAvailabilityCatalogs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccAvailabilityCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccAvailabilityCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList">DataOciCapacityManagementOccAvailabilityCatalogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection">OccAvailabilityCatalogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogStateInput">CatalogStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogState">CatalogState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filter"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList">DataOciCapacityManagementOccAvailabilityCatalogsFilterList</a>

---

##### `OccAvailabilityCatalogCollection`<sup>Required</sup> <a name="OccAvailabilityCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList OccAvailabilityCatalogCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a>

---

##### `CatalogStateInput`<sup>Optional</sup> <a name="CatalogStateInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogStateInput"></a>

```csharp
public string CatalogStateInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `CatalogState`<sup>Required</sup> <a name="CatalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogState"></a>

```csharp
public string CatalogState { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogsConfig <a name="DataOciCapacityManagementOccAvailabilityCatalogsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string CatalogState = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#compartment_id DataOciCapacityManagementOccAvailabilityCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.catalogState">CatalogState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#catalog_state DataOciCapacityManagementOccAvailabilityCatalogs#catalog_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#display_name DataOciCapacityManagementOccAvailabilityCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#id DataOciCapacityManagementOccAvailabilityCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#namespace DataOciCapacityManagementOccAvailabilityCatalogs#namespace}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#compartment_id DataOciCapacityManagementOccAvailabilityCatalogs#compartment_id}.

---

##### `CatalogState`<sup>Optional</sup> <a name="CatalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.catalogState"></a>

```csharp
public string CatalogState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#catalog_state DataOciCapacityManagementOccAvailabilityCatalogs#catalog_state}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#display_name DataOciCapacityManagementOccAvailabilityCatalogs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#filter DataOciCapacityManagementOccAvailabilityCatalogs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#id DataOciCapacityManagementOccAvailabilityCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#namespace DataOciCapacityManagementOccAvailabilityCatalogs#namespace}.

---

### DataOciCapacityManagementOccAvailabilityCatalogsFilter <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#name DataOciCapacityManagementOccAvailabilityCatalogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#values DataOciCapacityManagementOccAvailabilityCatalogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#regex DataOciCapacityManagementOccAvailabilityCatalogs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#name DataOciCapacityManagementOccAvailabilityCatalogs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#values DataOciCapacityManagementOccAvailabilityCatalogs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#regex DataOciCapacityManagementOccAvailabilityCatalogs#regex}.

---

### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection {

};
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems {

};
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails {

};
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccAvailabilityCatalogsFilterList <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get"></a>

```csharp
private DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get"></a>

```csharp
private DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.availableQuantity">AvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateExpectedCapacityHandover">DateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateFinalCustomerOrder">DateFinalCustomerOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.demandedQuantity">DemandedQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.totalAvailableQuantity">TotalAvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableQuantity`<sup>Required</sup> <a name="AvailableQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.availableQuantity"></a>

```csharp
public string AvailableQuantity { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DateExpectedCapacityHandover`<sup>Required</sup> <a name="DateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateExpectedCapacityHandover"></a>

```csharp
public string DateExpectedCapacityHandover { get; }
```

- *Type:* string

---

##### `DateFinalCustomerOrder`<sup>Required</sup> <a name="DateFinalCustomerOrder" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateFinalCustomerOrder"></a>

```csharp
public string DateFinalCustomerOrder { get; }
```

- *Type:* string

---

##### `DemandedQuantity`<sup>Required</sup> <a name="DemandedQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.demandedQuantity"></a>

```csharp
public string DemandedQuantity { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TotalAvailableQuantity`<sup>Required</sup> <a name="TotalAvailableQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.totalAvailableQuantity"></a>

```csharp
public string TotalAvailableQuantity { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get"></a>

```csharp
private DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get"></a>

```csharp
private DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion">FormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FormatVersion`<sup>Required</sup> <a name="FormatVersion" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion"></a>

```csharp
public string FormatVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.base64EncodedCatalogDetails">Base64EncodedCatalogDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState">CatalogState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails">MetadataDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Base64EncodedCatalogDetails`<sup>Required</sup> <a name="Base64EncodedCatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.base64EncodedCatalogDetails"></a>

```csharp
public string Base64EncodedCatalogDetails { get; }
```

- *Type:* string

---

##### `CatalogState`<sup>Required</sup> <a name="CatalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState"></a>

```csharp
public string CatalogState { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.details"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MetadataDetails`<sup>Required</sup> <a name="MetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList MetadataDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```csharp
public string OccCustomerGroupId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get"></a>

```csharp
private DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a>

---



