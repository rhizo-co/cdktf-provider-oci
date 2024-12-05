# `dataOciCloudMigrationsMigrationPlanAvailableShapes` Submodule <a name="`dataOciCloudMigrationsMigrationPlanAvailableShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapes <a name="DataOciCloudMigrationsMigrationPlanAvailableShapes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes oci_cloud_migrations_migration_plan_available_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapes(Construct Scope, string Id, DataOciCloudMigrationsMigrationPlanAvailableShapesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig">DataOciCloudMigrationsMigrationPlanAvailableShapesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig">DataOciCloudMigrationsMigrationPlanAvailableShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetDvhHostId">ResetDvhHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetReservedCapacityId">ResetReservedCapacityId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDvhHostId` <a name="ResetDvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetDvhHostId"></a>

```csharp
private void ResetDvhHostId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReservedCapacityId` <a name="ResetReservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetReservedCapacityId"></a>

```csharp
private void ResetReservedCapacityId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlanAvailableShapes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlanAvailableShapes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlanAvailableShapes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudMigrationsMigrationPlanAvailableShapes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShapes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlanAvailableShapes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudMigrationsMigrationPlanAvailableShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlanAvailableShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availableShapesCollection">AvailableShapesCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList">DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostIdInput">DvhHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanIdInput">MigrationPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityIdInput">ReservedCapacityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostId">DvhHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanId">MigrationPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityId">ReservedCapacityId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AvailableShapesCollection`<sup>Required</sup> <a name="AvailableShapesCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availableShapesCollection"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList AvailableShapesCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filter"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList">DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DvhHostIdInput`<sup>Optional</sup> <a name="DvhHostIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostIdInput"></a>

```csharp
public string DvhHostIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MigrationPlanIdInput`<sup>Optional</sup> <a name="MigrationPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanIdInput"></a>

```csharp
public string MigrationPlanIdInput { get; }
```

- *Type:* string

---

##### `ReservedCapacityIdInput`<sup>Optional</sup> <a name="ReservedCapacityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityIdInput"></a>

```csharp
public string ReservedCapacityIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DvhHostId`<sup>Required</sup> <a name="DvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostId"></a>

```csharp
public string DvhHostId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MigrationPlanId`<sup>Required</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanId"></a>

```csharp
public string MigrationPlanId { get; }
```

- *Type:* string

---

##### `ReservedCapacityId`<sup>Required</sup> <a name="ReservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityId"></a>

```csharp
public string ReservedCapacityId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection {

};
```


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems {

};
```


### DataOciCloudMigrationsMigrationPlanAvailableShapesConfig <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MigrationPlanId,
    string AvailabilityDomain = null,
    string CompartmentId = null,
    string DvhHostId = null,
    object Filter = null,
    string Id = null,
    string ReservedCapacityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.migrationPlanId">MigrationPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dvhHostId">DvhHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.reservedCapacityId">ReservedCapacityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MigrationPlanId`<sup>Required</sup> <a name="MigrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.migrationPlanId"></a>

```csharp
public string MigrationPlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}.

---

##### `DvhHostId`<sup>Optional</sup> <a name="DvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dvhHostId"></a>

```csharp
public string DvhHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#filter DataOciCloudMigrationsMigrationPlanAvailableShapes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReservedCapacityId`<sup>Optional</sup> <a name="ReservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.reservedCapacityId"></a>

```csharp
public string ReservedCapacityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}.

---

### DataOciCloudMigrationsMigrationPlanAvailableShapesFilter <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#name DataOciCloudMigrationsMigrationPlanAvailableShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#values DataOciCloudMigrationsMigrationPlanAvailableShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#regex DataOciCloudMigrationsMigrationPlanAvailableShapes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#name DataOciCloudMigrationsMigrationPlanAvailableShapes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#values DataOciCloudMigrationsMigrationPlanAvailableShapes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#regex DataOciCloudMigrationsMigrationPlanAvailableShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpuDescription">GpuDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpus">Gpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDiskDescription">LocalDiskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisks">LocalDisks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisksTotalSizeInGbs">LocalDisksTotalSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.maxVnicAttachments">MaxVnicAttachments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.minTotalBaselineOcpusRequired">MinTotalBaselineOcpusRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.paginationToken">PaginationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GpuDescription`<sup>Required</sup> <a name="GpuDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpuDescription"></a>

```csharp
public string GpuDescription { get; }
```

- *Type:* string

---

##### `Gpus`<sup>Required</sup> <a name="Gpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpus"></a>

```csharp
public double Gpus { get; }
```

- *Type:* double

---

##### `LocalDiskDescription`<sup>Required</sup> <a name="LocalDiskDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDiskDescription"></a>

```csharp
public string LocalDiskDescription { get; }
```

- *Type:* string

---

##### `LocalDisks`<sup>Required</sup> <a name="LocalDisks" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisks"></a>

```csharp
public double LocalDisks { get; }
```

- *Type:* double

---

##### `LocalDisksTotalSizeInGbs`<sup>Required</sup> <a name="LocalDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisksTotalSizeInGbs"></a>

```csharp
public double LocalDisksTotalSizeInGbs { get; }
```

- *Type:* double

---

##### `MaxVnicAttachments`<sup>Required</sup> <a name="MaxVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.maxVnicAttachments"></a>

```csharp
public double MaxVnicAttachments { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `MinTotalBaselineOcpusRequired`<sup>Required</sup> <a name="MinTotalBaselineOcpusRequired" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.minTotalBaselineOcpusRequired"></a>

```csharp
public double MinTotalBaselineOcpusRequired { get; }
```

- *Type:* double

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.networkingBandwidthInGbps"></a>

```csharp
public double NetworkingBandwidthInGbps { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `PaginationToken`<sup>Required</sup> <a name="PaginationToken" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.paginationToken"></a>

```csharp
public string PaginationToken { get; }
```

- *Type:* string

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.processorDescription"></a>

```csharp
public string ProcessorDescription { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems</a>

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.items"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection</a>

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get"></a>

```csharp
private DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



