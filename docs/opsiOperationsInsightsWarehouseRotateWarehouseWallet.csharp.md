# `opsiOperationsInsightsWarehouseRotateWarehouseWallet` Submodule <a name="`opsiOperationsInsightsWarehouseRotateWarehouseWallet` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsWarehouseRotateWarehouseWallet <a name="OpsiOperationsInsightsWarehouseRotateWarehouseWallet" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet oci_opsi_operations_insights_warehouse_rotate_warehouse_wallet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiOperationsInsightsWarehouseRotateWarehouseWallet(Construct Scope, string Id, OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig">OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig">OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.putTimeouts"></a>

```csharp
private void PutTimeouts(OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseRotateWarehouseWallet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiOperationsInsightsWarehouseRotateWarehouseWallet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiOperationsInsightsWarehouseRotateWarehouseWallet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiOperationsInsightsWarehouseRotateWarehouseWallet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiOperationsInsightsWarehouseRotateWarehouseWallet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseRotateWarehouseWallet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiOperationsInsightsWarehouseRotateWarehouseWallet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiOperationsInsightsWarehouseRotateWarehouseWallet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsWarehouseRotateWarehouseWallet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.operationsInsightsWarehouseIdInput">OperationsInsightsWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.timeouts"></a>

```csharp
public OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OperationsInsightsWarehouseIdInput`<sup>Optional</sup> <a name="OperationsInsightsWarehouseIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.operationsInsightsWarehouseIdInput"></a>

```csharp
public string OperationsInsightsWarehouseIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.operationsInsightsWarehouseId"></a>

```csharp
public string OperationsInsightsWarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig <a name="OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OperationsInsightsWarehouseId,
    string Id = null,
    OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseRotateWarehouseWallet#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#id OpsiOperationsInsightsWarehouseRotateWarehouseWallet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.operationsInsightsWarehouseId"></a>

```csharp
public string OperationsInsightsWarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseRotateWarehouseWallet#operations_insights_warehouse_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#id OpsiOperationsInsightsWarehouseRotateWarehouseWallet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.timeouts"></a>

```csharp
public OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#timeouts OpsiOperationsInsightsWarehouseRotateWarehouseWallet#timeouts}

---

### OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts <a name="OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#create OpsiOperationsInsightsWarehouseRotateWarehouseWallet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#delete OpsiOperationsInsightsWarehouseRotateWarehouseWallet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#update OpsiOperationsInsightsWarehouseRotateWarehouseWallet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#create OpsiOperationsInsightsWarehouseRotateWarehouseWallet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#delete OpsiOperationsInsightsWarehouseRotateWarehouseWallet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#update OpsiOperationsInsightsWarehouseRotateWarehouseWallet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference <a name="OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



