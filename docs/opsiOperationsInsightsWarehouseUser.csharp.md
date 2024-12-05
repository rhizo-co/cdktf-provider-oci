# `opsiOperationsInsightsWarehouseUser` Submodule <a name="`opsiOperationsInsightsWarehouseUser` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsWarehouseUser <a name="OpsiOperationsInsightsWarehouseUser" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user oci_opsi_operations_insights_warehouse_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiOperationsInsightsWarehouseUser(Construct Scope, string Id, OpsiOperationsInsightsWarehouseUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig">OpsiOperationsInsightsWarehouseUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig">OpsiOperationsInsightsWarehouseUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetIsEmDataAccess">ResetIsEmDataAccess</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetIsOpsiDataAccess">ResetIsOpsiDataAccess</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.putTimeouts"></a>

```csharp
private void PutTimeouts(OpsiOperationsInsightsWarehouseUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEmDataAccess` <a name="ResetIsEmDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetIsEmDataAccess"></a>

```csharp
private void ResetIsEmDataAccess()
```

##### `ResetIsOpsiDataAccess` <a name="ResetIsOpsiDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetIsOpsiDataAccess"></a>

```csharp
private void ResetIsOpsiDataAccess()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiOperationsInsightsWarehouseUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiOperationsInsightsWarehouseUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiOperationsInsightsWarehouseUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiOperationsInsightsWarehouseUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiOperationsInsightsWarehouseUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiOperationsInsightsWarehouseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsWarehouseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference">OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connectionPasswordInput">ConnectionPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isAwrDataAccessInput">IsAwrDataAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isEmDataAccessInput">IsEmDataAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isOpsiDataAccessInput">IsOpsiDataAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.operationsInsightsWarehouseIdInput">OperationsInsightsWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connectionPassword">ConnectionPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isAwrDataAccess">IsAwrDataAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isEmDataAccess">IsEmDataAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isOpsiDataAccess">IsOpsiDataAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeouts"></a>

```csharp
public OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference">OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConnectionPasswordInput`<sup>Optional</sup> <a name="ConnectionPasswordInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connectionPasswordInput"></a>

```csharp
public string ConnectionPasswordInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAwrDataAccessInput`<sup>Optional</sup> <a name="IsAwrDataAccessInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isAwrDataAccessInput"></a>

```csharp
public object IsAwrDataAccessInput { get; }
```

- *Type:* object

---

##### `IsEmDataAccessInput`<sup>Optional</sup> <a name="IsEmDataAccessInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isEmDataAccessInput"></a>

```csharp
public object IsEmDataAccessInput { get; }
```

- *Type:* object

---

##### `IsOpsiDataAccessInput`<sup>Optional</sup> <a name="IsOpsiDataAccessInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isOpsiDataAccessInput"></a>

```csharp
public object IsOpsiDataAccessInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperationsInsightsWarehouseIdInput`<sup>Optional</sup> <a name="OperationsInsightsWarehouseIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.operationsInsightsWarehouseIdInput"></a>

```csharp
public string OperationsInsightsWarehouseIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionPassword`<sup>Required</sup> <a name="ConnectionPassword" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.connectionPassword"></a>

```csharp
public string ConnectionPassword { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAwrDataAccess`<sup>Required</sup> <a name="IsAwrDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isAwrDataAccess"></a>

```csharp
public object IsAwrDataAccess { get; }
```

- *Type:* object

---

##### `IsEmDataAccess`<sup>Required</sup> <a name="IsEmDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isEmDataAccess"></a>

```csharp
public object IsEmDataAccess { get; }
```

- *Type:* object

---

##### `IsOpsiDataAccess`<sup>Required</sup> <a name="IsOpsiDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.isOpsiDataAccess"></a>

```csharp
public object IsOpsiDataAccess { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.operationsInsightsWarehouseId"></a>

```csharp
public string OperationsInsightsWarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsWarehouseUserConfig <a name="OpsiOperationsInsightsWarehouseUserConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiOperationsInsightsWarehouseUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ConnectionPassword,
    object IsAwrDataAccess,
    string Name,
    string OperationsInsightsWarehouseId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object IsEmDataAccess = null,
    object IsOpsiDataAccess = null,
    OpsiOperationsInsightsWarehouseUserTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#compartment_id OpsiOperationsInsightsWarehouseUser#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.connectionPassword">ConnectionPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#connection_password OpsiOperationsInsightsWarehouseUser#connection_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isAwrDataAccess">IsAwrDataAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_awr_data_access OpsiOperationsInsightsWarehouseUser#is_awr_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#name OpsiOperationsInsightsWarehouseUser#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseUser#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#defined_tags OpsiOperationsInsightsWarehouseUser#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#freeform_tags OpsiOperationsInsightsWarehouseUser#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#id OpsiOperationsInsightsWarehouseUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isEmDataAccess">IsEmDataAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_em_data_access OpsiOperationsInsightsWarehouseUser#is_em_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isOpsiDataAccess">IsOpsiDataAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_opsi_data_access OpsiOperationsInsightsWarehouseUser#is_opsi_data_access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#compartment_id OpsiOperationsInsightsWarehouseUser#compartment_id}.

---

##### `ConnectionPassword`<sup>Required</sup> <a name="ConnectionPassword" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.connectionPassword"></a>

```csharp
public string ConnectionPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#connection_password OpsiOperationsInsightsWarehouseUser#connection_password}.

---

##### `IsAwrDataAccess`<sup>Required</sup> <a name="IsAwrDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isAwrDataAccess"></a>

```csharp
public object IsAwrDataAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_awr_data_access OpsiOperationsInsightsWarehouseUser#is_awr_data_access}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#name OpsiOperationsInsightsWarehouseUser#name}.

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.operationsInsightsWarehouseId"></a>

```csharp
public string OperationsInsightsWarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseUser#operations_insights_warehouse_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#defined_tags OpsiOperationsInsightsWarehouseUser#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#freeform_tags OpsiOperationsInsightsWarehouseUser#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#id OpsiOperationsInsightsWarehouseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEmDataAccess`<sup>Optional</sup> <a name="IsEmDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isEmDataAccess"></a>

```csharp
public object IsEmDataAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_em_data_access OpsiOperationsInsightsWarehouseUser#is_em_data_access}.

---

##### `IsOpsiDataAccess`<sup>Optional</sup> <a name="IsOpsiDataAccess" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.isOpsiDataAccess"></a>

```csharp
public object IsOpsiDataAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#is_opsi_data_access OpsiOperationsInsightsWarehouseUser#is_opsi_data_access}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserConfig.property.timeouts"></a>

```csharp
public OpsiOperationsInsightsWarehouseUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts">OpsiOperationsInsightsWarehouseUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#timeouts OpsiOperationsInsightsWarehouseUser#timeouts}

---

### OpsiOperationsInsightsWarehouseUserTimeouts <a name="OpsiOperationsInsightsWarehouseUserTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiOperationsInsightsWarehouseUserTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#create OpsiOperationsInsightsWarehouseUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#delete OpsiOperationsInsightsWarehouseUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#update OpsiOperationsInsightsWarehouseUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#create OpsiOperationsInsightsWarehouseUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#delete OpsiOperationsInsightsWarehouseUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_user#update OpsiOperationsInsightsWarehouseUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference <a name="OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseUser.OpsiOperationsInsightsWarehouseUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



