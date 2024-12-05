# `serviceMeshVirtualServiceRouteTable` Submodule <a name="`serviceMeshVirtualServiceRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshVirtualServiceRouteTable <a name="ServiceMeshVirtualServiceRouteTable" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table oci_service_mesh_virtual_service_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTable(Construct Scope, string Id, ServiceMeshVirtualServiceRouteTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig">ServiceMeshVirtualServiceRouteTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig">ServiceMeshVirtualServiceRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules">PutRouteRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRouteRules` <a name="PutRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules"></a>

```csharp
private void PutRouteRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts"></a>

```csharp
private void PutTimeouts(ServiceMeshVirtualServiceRouteTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceMeshVirtualServiceRouteTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceMeshVirtualServiceRouteTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceMeshVirtualServiceRouteTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceMeshVirtualServiceRouteTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceMeshVirtualServiceRouteTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceMeshVirtualServiceRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshVirtualServiceRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRules">RouteRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList">ServiceMeshVirtualServiceRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference">ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRulesInput">RouteRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceIdInput">VirtualServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceId">VirtualServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRules"></a>

```csharp
public ServiceMeshVirtualServiceRouteTableRouteRulesList RouteRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList">ServiceMeshVirtualServiceRouteTableRouteRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeouts"></a>

```csharp
public ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference">ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RouteRulesInput`<sup>Optional</sup> <a name="RouteRulesInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRulesInput"></a>

```csharp
public object RouteRulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualServiceIdInput`<sup>Optional</sup> <a name="VirtualServiceIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceIdInput"></a>

```csharp
public string VirtualServiceIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceId"></a>

```csharp
public string VirtualServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshVirtualServiceRouteTableConfig <a name="ServiceMeshVirtualServiceRouteTableConfig" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Name,
    object RouteRules,
    string VirtualServiceId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    double Priority = null,
    ServiceMeshVirtualServiceRouteTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#compartment_id ServiceMeshVirtualServiceRouteTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#name ServiceMeshVirtualServiceRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.routeRules">RouteRules</a></code> | <code>object</code> | route_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceId">VirtualServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_service_id ServiceMeshVirtualServiceRouteTable#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#defined_tags ServiceMeshVirtualServiceRouteTable#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#description ServiceMeshVirtualServiceRouteTable#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#freeform_tags ServiceMeshVirtualServiceRouteTable#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#id ServiceMeshVirtualServiceRouteTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#priority ServiceMeshVirtualServiceRouteTable#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#compartment_id ServiceMeshVirtualServiceRouteTable#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#name ServiceMeshVirtualServiceRouteTable#name}.

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.routeRules"></a>

```csharp
public object RouteRules { get; set; }
```

- *Type:* object

route_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#route_rules ServiceMeshVirtualServiceRouteTable#route_rules}

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceId"></a>

```csharp
public string VirtualServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_service_id ServiceMeshVirtualServiceRouteTable#virtual_service_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#defined_tags ServiceMeshVirtualServiceRouteTable#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#description ServiceMeshVirtualServiceRouteTable#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#freeform_tags ServiceMeshVirtualServiceRouteTable#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#id ServiceMeshVirtualServiceRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#priority ServiceMeshVirtualServiceRouteTable#priority}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.timeouts"></a>

```csharp
public ServiceMeshVirtualServiceRouteTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#timeouts ServiceMeshVirtualServiceRouteTable#timeouts}

---

### ServiceMeshVirtualServiceRouteTableRouteRules <a name="ServiceMeshVirtualServiceRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableRouteRules {
    object Destinations,
    string Type,
    object IsGrpc = null,
    string Path = null,
    string PathType = null,
    string RequestTimeoutInMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.destinations">Destinations</a></code> | <code>object</code> | destinations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#type ServiceMeshVirtualServiceRouteTable#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.isGrpc">IsGrpc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#is_grpc ServiceMeshVirtualServiceRouteTable#is_grpc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path ServiceMeshVirtualServiceRouteTable#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.pathType">PathType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path_type ServiceMeshVirtualServiceRouteTable#path_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#request_timeout_in_ms ServiceMeshVirtualServiceRouteTable#request_timeout_in_ms}. |

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.destinations"></a>

```csharp
public object Destinations { get; set; }
```

- *Type:* object

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#destinations ServiceMeshVirtualServiceRouteTable#destinations}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#type ServiceMeshVirtualServiceRouteTable#type}.

---

##### `IsGrpc`<sup>Optional</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.isGrpc"></a>

```csharp
public object IsGrpc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#is_grpc ServiceMeshVirtualServiceRouteTable#is_grpc}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path ServiceMeshVirtualServiceRouteTable#path}.

---

##### `PathType`<sup>Optional</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.pathType"></a>

```csharp
public string PathType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path_type ServiceMeshVirtualServiceRouteTable#path_type}.

---

##### `RequestTimeoutInMs`<sup>Optional</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.requestTimeoutInMs"></a>

```csharp
public string RequestTimeoutInMs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#request_timeout_in_ms ServiceMeshVirtualServiceRouteTable#request_timeout_in_ms}.

---

### ServiceMeshVirtualServiceRouteTableRouteRulesDestinations <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableRouteRulesDestinations {
    string VirtualDeploymentId,
    double Weight,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.virtualDeploymentId">VirtualDeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_deployment_id ServiceMeshVirtualServiceRouteTable#virtual_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#weight ServiceMeshVirtualServiceRouteTable#weight}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#port ServiceMeshVirtualServiceRouteTable#port}. |

---

##### `VirtualDeploymentId`<sup>Required</sup> <a name="VirtualDeploymentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.virtualDeploymentId"></a>

```csharp
public string VirtualDeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_deployment_id ServiceMeshVirtualServiceRouteTable#virtual_deployment_id}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#weight ServiceMeshVirtualServiceRouteTable#weight}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#port ServiceMeshVirtualServiceRouteTable#port}.

---

### ServiceMeshVirtualServiceRouteTableTimeouts <a name="ServiceMeshVirtualServiceRouteTableTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#create ServiceMeshVirtualServiceRouteTable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#delete ServiceMeshVirtualServiceRouteTable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#update ServiceMeshVirtualServiceRouteTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#create ServiceMeshVirtualServiceRouteTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#delete ServiceMeshVirtualServiceRouteTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#update ServiceMeshVirtualServiceRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get"></a>

```csharp
private ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentIdInput">VirtualDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId">VirtualDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VirtualDeploymentIdInput`<sup>Optional</sup> <a name="VirtualDeploymentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentIdInput"></a>

```csharp
public string VirtualDeploymentIdInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VirtualDeploymentId`<sup>Required</sup> <a name="VirtualDeploymentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```csharp
public string VirtualDeploymentId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceMeshVirtualServiceRouteTableRouteRulesList <a name="ServiceMeshVirtualServiceRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableRouteRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get"></a>

```csharp
private ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference <a name="ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetIsGrpc">ResetIsGrpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPathType">ResetPathType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs">ResetRequestTimeoutInMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* object

---

##### `ResetIsGrpc` <a name="ResetIsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetIsGrpc"></a>

```csharp
private void ResetIsGrpc()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPathType` <a name="ResetPathType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPathType"></a>

```csharp
private void ResetPathType()
```

##### `ResetRequestTimeoutInMs` <a name="ResetRequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs"></a>

```csharp
private void ResetRequestTimeoutInMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpcInput">IsGrpcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathTypeInput">PathTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput">RequestTimeoutInMsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc">IsGrpc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType">PathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations"></a>

```csharp
public ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList Destinations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinationsInput"></a>

```csharp
public object DestinationsInput { get; }
```

- *Type:* object

---

##### `IsGrpcInput`<sup>Optional</sup> <a name="IsGrpcInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpcInput"></a>

```csharp
public object IsGrpcInput { get; }
```

- *Type:* object

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PathTypeInput`<sup>Optional</sup> <a name="PathTypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathTypeInput"></a>

```csharp
public string PathTypeInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInMsInput`<sup>Optional</sup> <a name="RequestTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput"></a>

```csharp
public string RequestTimeoutInMsInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IsGrpc`<sup>Required</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```csharp
public object IsGrpc { get; }
```

- *Type:* object

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType"></a>

```csharp
public string PathType { get; }
```

- *Type:* string

---

##### `RequestTimeoutInMs`<sup>Required</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```csharp
public string RequestTimeoutInMs { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference <a name="ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



