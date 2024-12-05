# `identityDomainReplicationToRegion` Submodule <a name="`identityDomainReplicationToRegion` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainReplicationToRegion <a name="IdentityDomainReplicationToRegion" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region oci_identity_domain_replication_to_region}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainReplicationToRegion(Construct Scope, string Id, IdentityDomainReplicationToRegionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig">IdentityDomainReplicationToRegionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig">IdentityDomainReplicationToRegionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.resetReplicaRegion">ResetReplicaRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainReplicationToRegionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts">IdentityDomainReplicationToRegionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReplicaRegion` <a name="ResetReplicaRegion" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.resetReplicaRegion"></a>

```csharp
private void ResetReplicaRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainReplicationToRegion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainReplicationToRegion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainReplicationToRegion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainReplicationToRegion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainReplicationToRegion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainReplicationToRegion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainReplicationToRegion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainReplicationToRegion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainReplicationToRegion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference">IdentityDomainReplicationToRegionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.replicaRegionInput">ReplicaRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.replicaRegion">ReplicaRegion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.timeouts"></a>

```csharp
public IdentityDomainReplicationToRegionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference">IdentityDomainReplicationToRegionTimeoutsOutputReference</a>

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ReplicaRegionInput`<sup>Optional</sup> <a name="ReplicaRegionInput" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.replicaRegionInput"></a>

```csharp
public string ReplicaRegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReplicaRegion`<sup>Required</sup> <a name="ReplicaRegion" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.replicaRegion"></a>

```csharp
public string ReplicaRegion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainReplicationToRegionConfig <a name="IdentityDomainReplicationToRegionConfig" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainReplicationToRegionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DomainId,
    string Id = null,
    string ReplicaRegion = null,
    IdentityDomainReplicationToRegionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.domainId">DomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#domain_id IdentityDomainReplicationToRegion#domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#id IdentityDomainReplicationToRegion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.replicaRegion">ReplicaRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#replica_region IdentityDomainReplicationToRegion#replica_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts">IdentityDomainReplicationToRegionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#domain_id IdentityDomainReplicationToRegion#domain_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#id IdentityDomainReplicationToRegion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicaRegion`<sup>Optional</sup> <a name="ReplicaRegion" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.replicaRegion"></a>

```csharp
public string ReplicaRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#replica_region IdentityDomainReplicationToRegion#replica_region}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionConfig.property.timeouts"></a>

```csharp
public IdentityDomainReplicationToRegionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts">IdentityDomainReplicationToRegionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#timeouts IdentityDomainReplicationToRegion#timeouts}

---

### IdentityDomainReplicationToRegionTimeouts <a name="IdentityDomainReplicationToRegionTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainReplicationToRegionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#create IdentityDomainReplicationToRegion#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#delete IdentityDomainReplicationToRegion#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#update IdentityDomainReplicationToRegion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#create IdentityDomainReplicationToRegion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#delete IdentityDomainReplicationToRegion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domain_replication_to_region#update IdentityDomainReplicationToRegion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainReplicationToRegionTimeoutsOutputReference <a name="IdentityDomainReplicationToRegionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainReplicationToRegionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainReplicationToRegion.IdentityDomainReplicationToRegionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



