# `operatorAccessControlOperatorControl` Submodule <a name="`operatorAccessControlOperatorControl` Submodule" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OperatorAccessControlOperatorControl <a name="OperatorAccessControlOperatorControl" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control oci_operator_access_control_operator_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OperatorAccessControlOperatorControl(Construct Scope, string Id, OperatorAccessControlOperatorControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig">OperatorAccessControlOperatorControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig">OperatorAccessControlOperatorControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetApproversList">ResetApproversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetEmailIdList">ResetEmailIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetNumberOfApprovers">ResetNumberOfApprovers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetPreApprovedOpActionList">ResetPreApprovedOpActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetSystemMessage">ResetSystemMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts"></a>

```csharp
private void PutTimeouts(OperatorAccessControlOperatorControlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

---

##### `ResetApproversList` <a name="ResetApproversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetApproversList"></a>

```csharp
private void ResetApproversList()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEmailIdList` <a name="ResetEmailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetEmailIdList"></a>

```csharp
private void ResetEmailIdList()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNumberOfApprovers` <a name="ResetNumberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetNumberOfApprovers"></a>

```csharp
private void ResetNumberOfApprovers()
```

##### `ResetPreApprovedOpActionList` <a name="ResetPreApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetPreApprovedOpActionList"></a>

```csharp
private void ResetPreApprovedOpActionList()
```

##### `ResetSystemMessage` <a name="ResetSystemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetSystemMessage"></a>

```csharp
private void ResetSystemMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OperatorAccessControlOperatorControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OperatorAccessControlOperatorControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OperatorAccessControlOperatorControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OperatorAccessControlOperatorControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OperatorAccessControlOperatorControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OperatorAccessControlOperatorControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OperatorAccessControlOperatorControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approvalRequiredOpActionList">ApprovalRequiredOpActionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isDefaultOperatorControl">IsDefaultOperatorControl</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lastModifiedInfo">LastModifiedInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfCreation">TimeOfCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfModification">TimeOfModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference">OperatorAccessControlOperatorControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsListInput">ApproverGroupsListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversListInput">ApproversListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdListInput">EmailIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApprovedInput">IsFullyPreApprovedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApproversInput">NumberOfApproversInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlNameInput">OperatorControlNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionListInput">PreApprovedOpActionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessageInput">SystemMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsList">ApproverGroupsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversList">ApproversList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdList">EmailIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApproved">IsFullyPreApproved</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApprovers">NumberOfApprovers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlName">OperatorControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionList">PreApprovedOpActionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessage">SystemMessage</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApprovalRequiredOpActionList`<sup>Required</sup> <a name="ApprovalRequiredOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approvalRequiredOpActionList"></a>

```csharp
public string[] ApprovalRequiredOpActionList { get; }
```

- *Type:* string[]

---

##### `IsDefaultOperatorControl`<sup>Required</sup> <a name="IsDefaultOperatorControl" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isDefaultOperatorControl"></a>

```csharp
public IResolvable IsDefaultOperatorControl { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastModifiedInfo`<sup>Required</sup> <a name="LastModifiedInfo" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.lastModifiedInfo"></a>

```csharp
public string LastModifiedInfo { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeOfCreation`<sup>Required</sup> <a name="TimeOfCreation" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfCreation"></a>

```csharp
public string TimeOfCreation { get; }
```

- *Type:* string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfDeletion"></a>

```csharp
public string TimeOfDeletion { get; }
```

- *Type:* string

---

##### `TimeOfModification`<sup>Required</sup> <a name="TimeOfModification" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeOfModification"></a>

```csharp
public string TimeOfModification { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeouts"></a>

```csharp
public OperatorAccessControlOperatorControlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference">OperatorAccessControlOperatorControlTimeoutsOutputReference</a>

---

##### `ApproverGroupsListInput`<sup>Optional</sup> <a name="ApproverGroupsListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsListInput"></a>

```csharp
public string[] ApproverGroupsListInput { get; }
```

- *Type:* string[]

---

##### `ApproversListInput`<sup>Optional</sup> <a name="ApproversListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversListInput"></a>

```csharp
public string[] ApproversListInput { get; }
```

- *Type:* string[]

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EmailIdListInput`<sup>Optional</sup> <a name="EmailIdListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdListInput"></a>

```csharp
public string[] EmailIdListInput { get; }
```

- *Type:* string[]

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsFullyPreApprovedInput`<sup>Optional</sup> <a name="IsFullyPreApprovedInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApprovedInput"></a>

```csharp
public object IsFullyPreApprovedInput { get; }
```

- *Type:* object

---

##### `NumberOfApproversInput`<sup>Optional</sup> <a name="NumberOfApproversInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApproversInput"></a>

```csharp
public double NumberOfApproversInput { get; }
```

- *Type:* double

---

##### `OperatorControlNameInput`<sup>Optional</sup> <a name="OperatorControlNameInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlNameInput"></a>

```csharp
public string OperatorControlNameInput { get; }
```

- *Type:* string

---

##### `PreApprovedOpActionListInput`<sup>Optional</sup> <a name="PreApprovedOpActionListInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionListInput"></a>

```csharp
public string[] PreApprovedOpActionListInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `SystemMessageInput`<sup>Optional</sup> <a name="SystemMessageInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessageInput"></a>

```csharp
public string SystemMessageInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApproverGroupsList`<sup>Required</sup> <a name="ApproverGroupsList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approverGroupsList"></a>

```csharp
public string[] ApproverGroupsList { get; }
```

- *Type:* string[]

---

##### `ApproversList`<sup>Required</sup> <a name="ApproversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.approversList"></a>

```csharp
public string[] ApproversList { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EmailIdList`<sup>Required</sup> <a name="EmailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.emailIdList"></a>

```csharp
public string[] EmailIdList { get; }
```

- *Type:* string[]

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsFullyPreApproved`<sup>Required</sup> <a name="IsFullyPreApproved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.isFullyPreApproved"></a>

```csharp
public object IsFullyPreApproved { get; }
```

- *Type:* object

---

##### `NumberOfApprovers`<sup>Required</sup> <a name="NumberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.numberOfApprovers"></a>

```csharp
public double NumberOfApprovers { get; }
```

- *Type:* double

---

##### `OperatorControlName`<sup>Required</sup> <a name="OperatorControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.operatorControlName"></a>

```csharp
public string OperatorControlName { get; }
```

- *Type:* string

---

##### `PreApprovedOpActionList`<sup>Required</sup> <a name="PreApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.preApprovedOpActionList"></a>

```csharp
public string[] PreApprovedOpActionList { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SystemMessage`<sup>Required</sup> <a name="SystemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.systemMessage"></a>

```csharp
public string SystemMessage { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OperatorAccessControlOperatorControlConfig <a name="OperatorAccessControlOperatorControlConfig" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OperatorAccessControlOperatorControlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ApproverGroupsList,
    string CompartmentId,
    object IsFullyPreApproved,
    string OperatorControlName,
    string ResourceType,
    string[] ApproversList = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string[] EmailIdList = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    double NumberOfApprovers = null,
    string[] PreApprovedOpActionList = null,
    string SystemMessage = null,
    OperatorAccessControlOperatorControlTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approverGroupsList">ApproverGroupsList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.isFullyPreApproved">IsFullyPreApproved</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.operatorControlName">OperatorControlName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approversList">ApproversList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.emailIdList">EmailIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.numberOfApprovers">NumberOfApprovers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.preApprovedOpActionList">PreApprovedOpActionList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.systemMessage">SystemMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApproverGroupsList`<sup>Required</sup> <a name="ApproverGroupsList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approverGroupsList"></a>

```csharp
public string[] ApproverGroupsList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approver_groups_list OperatorAccessControlOperatorControl#approver_groups_list}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#compartment_id OperatorAccessControlOperatorControl#compartment_id}.

---

##### `IsFullyPreApproved`<sup>Required</sup> <a name="IsFullyPreApproved" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.isFullyPreApproved"></a>

```csharp
public object IsFullyPreApproved { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#is_fully_pre_approved OperatorAccessControlOperatorControl#is_fully_pre_approved}.

---

##### `OperatorControlName`<sup>Required</sup> <a name="OperatorControlName" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.operatorControlName"></a>

```csharp
public string OperatorControlName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#operator_control_name OperatorAccessControlOperatorControl#operator_control_name}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#resource_type OperatorAccessControlOperatorControl#resource_type}.

---

##### `ApproversList`<sup>Optional</sup> <a name="ApproversList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.approversList"></a>

```csharp
public string[] ApproversList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#approvers_list OperatorAccessControlOperatorControl#approvers_list}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#defined_tags OperatorAccessControlOperatorControl#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#description OperatorAccessControlOperatorControl#description}.

---

##### `EmailIdList`<sup>Optional</sup> <a name="EmailIdList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.emailIdList"></a>

```csharp
public string[] EmailIdList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#email_id_list OperatorAccessControlOperatorControl#email_id_list}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#freeform_tags OperatorAccessControlOperatorControl#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#id OperatorAccessControlOperatorControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumberOfApprovers`<sup>Optional</sup> <a name="NumberOfApprovers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.numberOfApprovers"></a>

```csharp
public double NumberOfApprovers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#number_of_approvers OperatorAccessControlOperatorControl#number_of_approvers}.

---

##### `PreApprovedOpActionList`<sup>Optional</sup> <a name="PreApprovedOpActionList" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.preApprovedOpActionList"></a>

```csharp
public string[] PreApprovedOpActionList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#pre_approved_op_action_list OperatorAccessControlOperatorControl#pre_approved_op_action_list}.

---

##### `SystemMessage`<sup>Optional</sup> <a name="SystemMessage" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.systemMessage"></a>

```csharp
public string SystemMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#system_message OperatorAccessControlOperatorControl#system_message}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlConfig.property.timeouts"></a>

```csharp
public OperatorAccessControlOperatorControlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts">OperatorAccessControlOperatorControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#timeouts OperatorAccessControlOperatorControl#timeouts}

---

### OperatorAccessControlOperatorControlTimeouts <a name="OperatorAccessControlOperatorControlTimeouts" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OperatorAccessControlOperatorControlTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#create OperatorAccessControlOperatorControl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#delete OperatorAccessControlOperatorControl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/operator_access_control_operator_control#update OperatorAccessControlOperatorControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OperatorAccessControlOperatorControlTimeoutsOutputReference <a name="OperatorAccessControlOperatorControlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OperatorAccessControlOperatorControlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.operatorAccessControlOperatorControl.OperatorAccessControlOperatorControlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



