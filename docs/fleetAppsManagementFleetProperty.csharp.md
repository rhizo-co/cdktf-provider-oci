# `fleetAppsManagementFleetProperty` Submodule <a name="`fleetAppsManagementFleetProperty` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleetProperty <a name="FleetAppsManagementFleetProperty" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property oci_fleet_apps_management_fleet_property}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetProperty(Construct Scope, string Id, FleetAppsManagementFleetPropertyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig">FleetAppsManagementFleetPropertyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig">FleetAppsManagementFleetPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.putTimeouts"></a>

```csharp
private void PutTimeouts(FleetAppsManagementFleetPropertyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts">FleetAppsManagementFleetPropertyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleetProperty resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementFleetProperty.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementFleetProperty.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementFleetProperty.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetAppsManagementFleetProperty.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FleetAppsManagementFleetProperty resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetAppsManagementFleetProperty to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetAppsManagementFleetProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleetProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.selectionType">SelectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference">FleetAppsManagementFleetPropertyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.fleetIdInput">FleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.propertyIdInput">PropertyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.propertyId">PropertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `SelectionType`<sup>Required</sup> <a name="SelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.selectionType"></a>

```csharp
public string SelectionType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.timeouts"></a>

```csharp
public FleetAppsManagementFleetPropertyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference">FleetAppsManagementFleetPropertyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.fleetIdInput"></a>

```csharp
public string FleetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PropertyIdInput`<sup>Optional</sup> <a name="PropertyIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.propertyIdInput"></a>

```csharp
public string PropertyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.propertyId"></a>

```csharp
public string PropertyId { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetProperty.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetPropertyConfig <a name="FleetAppsManagementFleetPropertyConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetPropertyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string FleetId,
    string PropertyId,
    string Value,
    string Id = null,
    FleetAppsManagementFleetPropertyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#compartment_id FleetAppsManagementFleetProperty#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.fleetId">FleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#fleet_id FleetAppsManagementFleetProperty#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.propertyId">PropertyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#property_id FleetAppsManagementFleetProperty#property_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#value FleetAppsManagementFleetProperty#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#id FleetAppsManagementFleetProperty#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts">FleetAppsManagementFleetPropertyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#compartment_id FleetAppsManagementFleetProperty#compartment_id}.

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.fleetId"></a>

```csharp
public string FleetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#fleet_id FleetAppsManagementFleetProperty#fleet_id}.

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.propertyId"></a>

```csharp
public string PropertyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#property_id FleetAppsManagementFleetProperty#property_id}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#value FleetAppsManagementFleetProperty#value}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#id FleetAppsManagementFleetProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyConfig.property.timeouts"></a>

```csharp
public FleetAppsManagementFleetPropertyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts">FleetAppsManagementFleetPropertyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#timeouts FleetAppsManagementFleetProperty#timeouts}

---

### FleetAppsManagementFleetPropertyTimeouts <a name="FleetAppsManagementFleetPropertyTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetPropertyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#create FleetAppsManagementFleetProperty#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#delete FleetAppsManagementFleetProperty#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#update FleetAppsManagementFleetProperty#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#create FleetAppsManagementFleetProperty#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#delete FleetAppsManagementFleetProperty#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_property#update FleetAppsManagementFleetProperty#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetPropertyTimeoutsOutputReference <a name="FleetAppsManagementFleetPropertyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetAppsManagementFleetPropertyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetProperty.FleetAppsManagementFleetPropertyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


