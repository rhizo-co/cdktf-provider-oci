# `licenseManagerLicenseRecord` Submodule <a name="`licenseManagerLicenseRecord` Submodule" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicenseManagerLicenseRecord <a name="LicenseManagerLicenseRecord" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record oci_license_manager_license_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerLicenseRecord(Construct Scope, string Id, LicenseManagerLicenseRecordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig">LicenseManagerLicenseRecordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig">LicenseManagerLicenseRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetExpirationDate">ResetExpirationDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetLicenseCount">ResetLicenseCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetSupportEndDate">ResetSupportEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts"></a>

```csharp
private void PutTimeouts(LicenseManagerLicenseRecordTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetExpirationDate` <a name="ResetExpirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetExpirationDate"></a>

```csharp
private void ResetExpirationDate()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicenseCount` <a name="ResetLicenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetLicenseCount"></a>

```csharp
private void ResetLicenseCount()
```

##### `ResetProductId` <a name="ResetProductId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetProductId"></a>

```csharp
private void ResetProductId()
```

##### `ResetSupportEndDate` <a name="ResetSupportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetSupportEndDate"></a>

```csharp
private void ResetSupportEndDate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LicenseManagerLicenseRecord.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LicenseManagerLicenseRecord.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LicenseManagerLicenseRecord.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LicenseManagerLicenseRecord.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicenseManagerLicenseRecord to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicenseManagerLicenseRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LicenseManagerLicenseRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseUnit">LicenseUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicense">ProductLicense</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference">LicenseManagerLicenseRecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDateInput">ExpirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetualInput">IsPerpetualInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimitedInput">IsUnlimitedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCountInput">LicenseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseIdInput">ProductLicenseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDateInput">SupportEndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetual">IsPerpetual</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimited">IsUnlimited</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCount">LicenseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseId">ProductLicenseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDate">SupportEndDate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `LicenseUnit`<sup>Required</sup> <a name="LicenseUnit" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseUnit"></a>

```csharp
public string LicenseUnit { get; }
```

- *Type:* string

---

##### `ProductLicense`<sup>Required</sup> <a name="ProductLicense" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicense"></a>

```csharp
public string ProductLicense { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeouts"></a>

```csharp
public LicenseManagerLicenseRecordTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference">LicenseManagerLicenseRecordTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDateInput"></a>

```csharp
public string ExpirationDateInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsPerpetualInput`<sup>Optional</sup> <a name="IsPerpetualInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetualInput"></a>

```csharp
public object IsPerpetualInput { get; }
```

- *Type:* object

---

##### `IsUnlimitedInput`<sup>Optional</sup> <a name="IsUnlimitedInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimitedInput"></a>

```csharp
public object IsUnlimitedInput { get; }
```

- *Type:* object

---

##### `LicenseCountInput`<sup>Optional</sup> <a name="LicenseCountInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCountInput"></a>

```csharp
public double LicenseCountInput { get; }
```

- *Type:* double

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `ProductLicenseIdInput`<sup>Optional</sup> <a name="ProductLicenseIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseIdInput"></a>

```csharp
public string ProductLicenseIdInput { get; }
```

- *Type:* string

---

##### `SupportEndDateInput`<sup>Optional</sup> <a name="SupportEndDateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDateInput"></a>

```csharp
public string SupportEndDateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPerpetual`<sup>Required</sup> <a name="IsPerpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isPerpetual"></a>

```csharp
public object IsPerpetual { get; }
```

- *Type:* object

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.isUnlimited"></a>

```csharp
public object IsUnlimited { get; }
```

- *Type:* object

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.licenseCount"></a>

```csharp
public double LicenseCount { get; }
```

- *Type:* double

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.productLicenseId"></a>

```csharp
public string ProductLicenseId { get; }
```

- *Type:* string

---

##### `SupportEndDate`<sup>Required</sup> <a name="SupportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.supportEndDate"></a>

```csharp
public string SupportEndDate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecord.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerLicenseRecordConfig <a name="LicenseManagerLicenseRecordConfig" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerLicenseRecordConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    object IsPerpetual,
    object IsUnlimited,
    string ProductLicenseId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string ExpirationDate = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    double LicenseCount = null,
    string ProductId = null,
    string SupportEndDate = null,
    LicenseManagerLicenseRecordTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isPerpetual">IsPerpetual</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isUnlimited">IsUnlimited</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productLicenseId">ProductLicenseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.licenseCount">LicenseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.supportEndDate">SupportEndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#display_name LicenseManagerLicenseRecord#display_name}.

---

##### `IsPerpetual`<sup>Required</sup> <a name="IsPerpetual" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isPerpetual"></a>

```csharp
public object IsPerpetual { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_perpetual LicenseManagerLicenseRecord#is_perpetual}.

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.isUnlimited"></a>

```csharp
public object IsUnlimited { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#is_unlimited LicenseManagerLicenseRecord#is_unlimited}.

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productLicenseId"></a>

```csharp
public string ProductLicenseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_license_id LicenseManagerLicenseRecord#product_license_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#defined_tags LicenseManagerLicenseRecord#defined_tags}.

---

##### `ExpirationDate`<sup>Optional</sup> <a name="ExpirationDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#expiration_date LicenseManagerLicenseRecord#expiration_date}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#freeform_tags LicenseManagerLicenseRecord#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#id LicenseManagerLicenseRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseCount`<sup>Optional</sup> <a name="LicenseCount" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.licenseCount"></a>

```csharp
public double LicenseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#license_count LicenseManagerLicenseRecord#license_count}.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#product_id LicenseManagerLicenseRecord#product_id}.

---

##### `SupportEndDate`<sup>Optional</sup> <a name="SupportEndDate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.supportEndDate"></a>

```csharp
public string SupportEndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#support_end_date LicenseManagerLicenseRecord#support_end_date}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordConfig.property.timeouts"></a>

```csharp
public LicenseManagerLicenseRecordTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts">LicenseManagerLicenseRecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#timeouts LicenseManagerLicenseRecord#timeouts}

---

### LicenseManagerLicenseRecordTimeouts <a name="LicenseManagerLicenseRecordTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerLicenseRecordTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#create LicenseManagerLicenseRecord#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#delete LicenseManagerLicenseRecord#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_license_record#update LicenseManagerLicenseRecord#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerLicenseRecordTimeoutsOutputReference <a name="LicenseManagerLicenseRecordTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LicenseManagerLicenseRecordTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.licenseManagerLicenseRecord.LicenseManagerLicenseRecordTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



