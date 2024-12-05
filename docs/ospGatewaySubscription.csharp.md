# `ospGatewaySubscription` Submodule <a name="`ospGatewaySubscription` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewaySubscription <a name="OspGatewaySubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription oci_osp_gateway_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscription(Construct Scope, string Id, OspGatewaySubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig">OspGatewaySubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig">OspGatewaySubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription">PutSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubscription` <a name="PutSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription"></a>

```csharp
private void PutSubscription(OspGatewaySubscriptionSubscription Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(OspGatewaySubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OspGatewaySubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OspGatewaySubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OspGatewaySubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OspGatewaySubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OspGatewaySubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OspGatewaySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewaySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType">AccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress">BillingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode">GsiOrgCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay">IsIntentToPay</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions">PaymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType">PlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription">Subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState">UpgradeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput">SubscriptionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType"></a>

```csharp
public string AccountType { get; }
```

- *Type:* string

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress"></a>

```csharp
public OspGatewaySubscriptionBillingAddressList BillingAddress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a>

---

##### `BillToCustAccountId`<sup>Required</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId"></a>

```csharp
public string BillToCustAccountId { get; }
```

- *Type:* string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `GsiOrgCode`<sup>Required</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode"></a>

```csharp
public string GsiOrgCode { get; }
```

- *Type:* string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay"></a>

```csharp
public IResolvable IsIntentToPay { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `PaymentGateway`<sup>Required</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway"></a>

```csharp
public OspGatewaySubscriptionPaymentGatewayList PaymentGateway { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a>

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions"></a>

```csharp
public OspGatewaySubscriptionPaymentOptionsList PaymentOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a>

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType"></a>

```csharp
public string PlanType { get; }
```

- *Type:* string

---

##### `ShipToCustAcctRoleId`<sup>Required</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId"></a>

```csharp
public string ShipToCustAcctRoleId { get; }
```

- *Type:* string

---

##### `ShipToCustAcctSiteId`<sup>Required</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId"></a>

```csharp
public string ShipToCustAcctSiteId { get; }
```

- *Type:* string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription"></a>

```csharp
public OspGatewaySubscriptionSubscriptionOutputReference Subscription { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a>

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber"></a>

```csharp
public string SubscriptionPlanNumber { get; }
```

- *Type:* string

---

##### `TaxInfo`<sup>Required</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo"></a>

```csharp
public OspGatewaySubscriptionTaxInfoList TaxInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts"></a>

```csharp
public OspGatewaySubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a>

---

##### `TimePersonalToCorporateConv`<sup>Required</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv"></a>

```csharp
public string TimePersonalToCorporateConv { get; }
```

- *Type:* string

---

##### `TimePlanUpgrade`<sup>Required</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade"></a>

```csharp
public string TimePlanUpgrade { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `UpgradeState`<sup>Required</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState"></a>

```csharp
public string UpgradeState { get; }
```

- *Type:* string

---

##### `UpgradeStateDetails`<sup>Required</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails"></a>

```csharp
public string UpgradeStateDetails { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput"></a>

```csharp
public string OspHomeRegionInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput"></a>

```csharp
public OspGatewaySubscriptionSubscription SubscriptionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewaySubscriptionBillingAddress <a name="OspGatewaySubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionBillingAddress {

};
```


### OspGatewaySubscriptionConfig <a name="OspGatewaySubscriptionConfig" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Email,
    string OspHomeRegion,
    OspGatewaySubscriptionSubscription Subscription,
    string SubscriptionId,
    string Id = null,
    OspGatewaySubscriptionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription">Subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | subscription block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}.

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}.

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription"></a>

```csharp
public OspGatewaySubscriptionSubscription Subscription { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription OspGatewaySubscription#subscription}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts"></a>

```csharp
public OspGatewaySubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#timeouts OspGatewaySubscription#timeouts}

---

### OspGatewaySubscriptionPaymentGateway <a name="OspGatewaySubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentGateway {

};
```


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentGatewayMerchantDefinedData {

};
```


### OspGatewaySubscriptionPaymentOptions <a name="OspGatewaySubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentOptions {

};
```


### OspGatewaySubscriptionSubscription <a name="OspGatewaySubscriptionSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscription {
    string SubscriptionPlanNumber,
    string AccountType = null,
    object BillingAddress = null,
    string BillToCustAccountId = null,
    string CurrencyCode = null,
    string GsiOrgCode = null,
    string Id = null,
    object IsIntentToPay = null,
    string LanguageCode = null,
    string OrganizationId = null,
    OspGatewaySubscriptionSubscriptionPaymentGateway PaymentGateway = null,
    object PaymentOptions = null,
    string PlanType = null,
    string ShipToCustAcctRoleId = null,
    string ShipToCustAcctSiteId = null,
    OspGatewaySubscriptionSubscriptionTaxInfo TaxInfo = null,
    string TimePersonalToCorporateConv = null,
    string TimePlanUpgrade = null,
    string TimeStart = null,
    string UpgradeState = null,
    string UpgradeStateDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType">AccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress">BillingAddress</a></code> | <code>object</code> | billing_address block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode">GsiOrgCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay">IsIntentToPay</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode">LanguageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId">OrganizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | payment_gateway block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions">PaymentOptions</a></code> | <code>object</code> | payment_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType">PlanType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | tax_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart">TimeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState">UpgradeState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}. |

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber"></a>

```csharp
public string SubscriptionPlanNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}.

---

##### `AccountType`<sup>Optional</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType"></a>

```csharp
public string AccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}.

---

##### `BillingAddress`<sup>Optional</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress"></a>

```csharp
public object BillingAddress { get; set; }
```

- *Type:* object

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#billing_address OspGatewaySubscription#billing_address}

---

##### `BillToCustAccountId`<sup>Optional</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId"></a>

```csharp
public string BillToCustAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}.

---

##### `CurrencyCode`<sup>Optional</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}.

---

##### `GsiOrgCode`<sup>Optional</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode"></a>

```csharp
public string GsiOrgCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsIntentToPay`<sup>Optional</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay"></a>

```csharp
public object IsIntentToPay { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}.

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}.

---

##### `PaymentGateway`<sup>Optional</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentGateway PaymentGateway { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

payment_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_gateway OspGatewaySubscription#payment_gateway}

---

##### `PaymentOptions`<sup>Optional</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions"></a>

```csharp
public object PaymentOptions { get; set; }
```

- *Type:* object

payment_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_options OspGatewaySubscription#payment_options}

---

##### `PlanType`<sup>Optional</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType"></a>

```csharp
public string PlanType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}.

---

##### `ShipToCustAcctRoleId`<sup>Optional</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId"></a>

```csharp
public string ShipToCustAcctRoleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}.

---

##### `ShipToCustAcctSiteId`<sup>Optional</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId"></a>

```csharp
public string ShipToCustAcctSiteId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}.

---

##### `TaxInfo`<sup>Optional</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo"></a>

```csharp
public OspGatewaySubscriptionSubscriptionTaxInfo TaxInfo { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

tax_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_info OspGatewaySubscription#tax_info}

---

##### `TimePersonalToCorporateConv`<sup>Optional</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv"></a>

```csharp
public string TimePersonalToCorporateConv { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}.

---

##### `TimePlanUpgrade`<sup>Optional</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade"></a>

```csharp
public string TimePlanUpgrade { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart"></a>

```csharp
public string TimeStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}.

---

##### `UpgradeState`<sup>Optional</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState"></a>

```csharp
public string UpgradeState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}.

---

##### `UpgradeStateDetails`<sup>Optional</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails"></a>

```csharp
public string UpgradeStateDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}.

---

### OspGatewaySubscriptionSubscriptionBillingAddress <a name="OspGatewaySubscriptionSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionBillingAddress {
    string AddressKey = null,
    string City = null,
    string CompanyName = null,
    string ContributorClass = null,
    string Country = null,
    string County = null,
    string DepartmentName = null,
    string EmailAddress = null,
    string FirstName = null,
    string InternalNumber = null,
    string JobTitle = null,
    string LastName = null,
    string Line1 = null,
    string Line2 = null,
    string Line3 = null,
    string Line4 = null,
    string MiddleName = null,
    string MunicipalInscription = null,
    string PhoneCountryCode = null,
    string PhoneNumber = null,
    string PostalCode = null,
    string Province = null,
    string State = null,
    string StateInscription = null,
    string StreetName = null,
    string StreetNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey">AddressKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName">CompanyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass">ContributorClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName">DepartmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber">InternalNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle">JobTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1">Line1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2">Line2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3">Line3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4">Line4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName">MiddleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription">MunicipalInscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription">StateInscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName">StreetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber">StreetNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}. |

---

##### `AddressKey`<sup>Optional</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey"></a>

```csharp
public string AddressKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}.

---

##### `City`<sup>Optional</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}.

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName"></a>

```csharp
public string CompanyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}.

---

##### `ContributorClass`<sup>Optional</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass"></a>

```csharp
public string ContributorClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}.

---

##### `DepartmentName`<sup>Optional</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName"></a>

```csharp
public string DepartmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `InternalNumber`<sup>Optional</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber"></a>

```csharp
public string InternalNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}.

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle"></a>

```csharp
public string JobTitle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `Line1`<sup>Optional</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1"></a>

```csharp
public string Line1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}.

---

##### `Line2`<sup>Optional</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2"></a>

```csharp
public string Line2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}.

---

##### `Line3`<sup>Optional</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3"></a>

```csharp
public string Line3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}.

---

##### `Line4`<sup>Optional</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4"></a>

```csharp
public string Line4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}.

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName"></a>

```csharp
public string MiddleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}.

---

##### `MunicipalInscription`<sup>Optional</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription"></a>

```csharp
public string MunicipalInscription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}.

---

##### `PhoneCountryCode`<sup>Optional</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode"></a>

```csharp
public string PhoneCountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}.

---

##### `StateInscription`<sup>Optional</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription"></a>

```csharp
public string StateInscription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}.

---

##### `StreetName`<sup>Optional</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName"></a>

```csharp
public string StreetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}.

---

##### `StreetNumber`<sup>Optional</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber"></a>

```csharp
public string StreetNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}.

---

### OspGatewaySubscriptionSubscriptionPaymentGateway <a name="OspGatewaySubscriptionSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionPaymentGateway {
    OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData MerchantDefinedData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | merchant_defined_data block. |

---

##### `MerchantDefinedData`<sup>Optional</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData MerchantDefinedData { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

merchant_defined_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#merchant_defined_data OspGatewaySubscription#merchant_defined_data}

---

### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData {
    string CloudAccountName = null,
    string PromoType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName">CloudAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType">PromoType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}. |

---

##### `CloudAccountName`<sup>Optional</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName"></a>

```csharp
public string CloudAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}.

---

##### `PromoType`<sup>Optional</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType"></a>

```csharp
public string PromoType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}.

---

### OspGatewaySubscriptionSubscriptionPaymentOptions <a name="OspGatewaySubscriptionSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionPaymentOptions {
    string PaymentMethod,
    string CreditCardType = null,
    string EmailAddress = null,
    string ExtBillingAgreementId = null,
    string FirstName = null,
    string LastDigits = null,
    string LastName = null,
    string NameOnCard = null,
    string TimeExpiration = null,
    string WalletInstrumentId = null,
    string WalletTransactionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod">PaymentMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType">CreditCardType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits">LastDigits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard">NameOnCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration">TimeExpiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId">WalletTransactionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}. |

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod"></a>

```csharp
public string PaymentMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}.

---

##### `CreditCardType`<sup>Optional</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType"></a>

```csharp
public string CreditCardType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `ExtBillingAgreementId`<sup>Optional</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId"></a>

```csharp
public string ExtBillingAgreementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `LastDigits`<sup>Optional</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits"></a>

```csharp
public string LastDigits { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `NameOnCard`<sup>Optional</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard"></a>

```csharp
public string NameOnCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}.

---

##### `TimeExpiration`<sup>Optional</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration"></a>

```csharp
public string TimeExpiration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}.

---

##### `WalletInstrumentId`<sup>Optional</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId"></a>

```csharp
public string WalletInstrumentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}.

---

##### `WalletTransactionId`<sup>Optional</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId"></a>

```csharp
public string WalletTransactionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}.

---

### OspGatewaySubscriptionSubscriptionTaxInfo <a name="OspGatewaySubscriptionSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionTaxInfo {
    string NoTaxReasonCode = null,
    string NoTaxReasonCodeDetails = null,
    string TaxCnpj = null,
    string TaxPayerId = null,
    string TaxRegNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj">TaxCnpj</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId">TaxPayerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber">TaxRegNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}. |

---

##### `NoTaxReasonCode`<sup>Optional</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode"></a>

```csharp
public string NoTaxReasonCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}.

---

##### `NoTaxReasonCodeDetails`<sup>Optional</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails"></a>

```csharp
public string NoTaxReasonCodeDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}.

---

##### `TaxCnpj`<sup>Optional</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj"></a>

```csharp
public string TaxCnpj { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}.

---

##### `TaxPayerId`<sup>Optional</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId"></a>

```csharp
public string TaxPayerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}.

---

##### `TaxRegNumber`<sup>Optional</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber"></a>

```csharp
public string TaxRegNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}.

---

### OspGatewaySubscriptionTaxInfo <a name="OspGatewaySubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionTaxInfo {

};
```


### OspGatewaySubscriptionTimeouts <a name="OspGatewaySubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewaySubscriptionBillingAddressList <a name="OspGatewaySubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionBillingAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get"></a>

```csharp
private OspGatewaySubscriptionBillingAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OspGatewaySubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionBillingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1">Line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2">Line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3">Line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4">Line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName">StreetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey"></a>

```csharp
public string AddressKey { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```csharp
public string ContributorClass { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName"></a>

```csharp
public string DepartmentName { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```csharp
public string InternalNumber { get; }
```

- *Type:* string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```csharp
public string JobTitle { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1"></a>

```csharp
public string Line1 { get; }
```

- *Type:* string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2"></a>

```csharp
public string Line2 { get; }
```

- *Type:* string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3"></a>

```csharp
public string Line3 { get; }
```

- *Type:* string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4"></a>

```csharp
public string Line4 { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```csharp
public string MunicipalInscription { get; }
```

- *Type:* string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```csharp
public string PhoneCountryCode { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```csharp
public string StateInscription { get; }
```

- *Type:* string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName"></a>

```csharp
public string StreetName { get; }
```

- *Type:* string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```csharp
public string StreetNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionBillingAddress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a>

---


### OspGatewaySubscriptionPaymentGatewayList <a name="OspGatewaySubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentGatewayList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get"></a>

```csharp
private OspGatewaySubscriptionPaymentGatewayOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```csharp
private OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">PromoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```csharp
public string CloudAccountName { get; }
```

- *Type:* string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```csharp
public string PromoType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionPaymentGatewayMerchantDefinedData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MerchantDefinedData`<sup>Required</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```csharp
public OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList MerchantDefinedData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionPaymentGateway InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get"></a>

```csharp
private OspGatewaySubscriptionPaymentOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OspGatewaySubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionPaymentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType">CreditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits">LastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId">WalletTransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```csharp
public string CreditCardType { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `ExtBillingAgreementId`<sup>Required</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```csharp
public string ExtBillingAgreementId { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```csharp
public string LastDigits { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```csharp
public string NameOnCard { get; }
```

- *Type:* string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```csharp
public string PaymentMethod { get; }
```

- *Type:* string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```csharp
public string TimeExpiration { get; }
```

- *Type:* string

---

##### `WalletInstrumentId`<sup>Required</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```csharp
public string WalletInstrumentId { get; }
```

- *Type:* string

---

##### `WalletTransactionId`<sup>Required</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```csharp
public string WalletTransactionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionPaymentOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a>

---


### OspGatewaySubscriptionSubscriptionBillingAddressList <a name="OspGatewaySubscriptionSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionBillingAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get"></a>

```csharp
private OspGatewaySubscriptionSubscriptionBillingAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OspGatewaySubscriptionSubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionBillingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey">ResetAddressKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName">ResetCompanyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass">ResetContributorClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName">ResetDepartmentName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber">ResetInternalNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle">ResetJobTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1">ResetLine1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2">ResetLine2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3">ResetLine3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4">ResetLine4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription">ResetMunicipalInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode">ResetPhoneCountryCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription">ResetStateInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName">ResetStreetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber">ResetStreetNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressKey` <a name="ResetAddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey"></a>

```csharp
private void ResetAddressKey()
```

##### `ResetCity` <a name="ResetCity" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCompanyName` <a name="ResetCompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName"></a>

```csharp
private void ResetCompanyName()
```

##### `ResetContributorClass` <a name="ResetContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass"></a>

```csharp
private void ResetContributorClass()
```

##### `ResetCountry` <a name="ResetCountry" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetDepartmentName` <a name="ResetDepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName"></a>

```csharp
private void ResetDepartmentName()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetInternalNumber` <a name="ResetInternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber"></a>

```csharp
private void ResetInternalNumber()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle"></a>

```csharp
private void ResetJobTitle()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetLine1` <a name="ResetLine1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1"></a>

```csharp
private void ResetLine1()
```

##### `ResetLine2` <a name="ResetLine2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2"></a>

```csharp
private void ResetLine2()
```

##### `ResetLine3` <a name="ResetLine3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3"></a>

```csharp
private void ResetLine3()
```

##### `ResetLine4` <a name="ResetLine4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4"></a>

```csharp
private void ResetLine4()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName"></a>

```csharp
private void ResetMiddleName()
```

##### `ResetMunicipalInscription` <a name="ResetMunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription"></a>

```csharp
private void ResetMunicipalInscription()
```

##### `ResetPhoneCountryCode` <a name="ResetPhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode"></a>

```csharp
private void ResetPhoneCountryCode()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStateInscription` <a name="ResetStateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription"></a>

```csharp
private void ResetStateInscription()
```

##### `ResetStreetName` <a name="ResetStreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName"></a>

```csharp
private void ResetStreetName()
```

##### `ResetStreetNumber` <a name="ResetStreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber"></a>

```csharp
private void ResetStreetNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput">AddressKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput">CompanyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput">ContributorClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput">DepartmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput">InternalNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput">JobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input">Line1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input">Line2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input">Line3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input">Line4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput">MiddleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput">MunicipalInscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput">PhoneCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput">StateInscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput">StreetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput">StreetNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1">Line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2">Line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3">Line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4">Line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName">StreetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressKeyInput`<sup>Optional</sup> <a name="AddressKeyInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput"></a>

```csharp
public string AddressKeyInput { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput"></a>

```csharp
public string CompanyNameInput { get; }
```

- *Type:* string

---

##### `ContributorClassInput`<sup>Optional</sup> <a name="ContributorClassInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput"></a>

```csharp
public string ContributorClassInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `DepartmentNameInput`<sup>Optional</sup> <a name="DepartmentNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput"></a>

```csharp
public string DepartmentNameInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `InternalNumberInput`<sup>Optional</sup> <a name="InternalNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput"></a>

```csharp
public string InternalNumberInput { get; }
```

- *Type:* string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput"></a>

```csharp
public string JobTitleInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `Line1Input`<sup>Optional</sup> <a name="Line1Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input"></a>

```csharp
public string Line1Input { get; }
```

- *Type:* string

---

##### `Line2Input`<sup>Optional</sup> <a name="Line2Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input"></a>

```csharp
public string Line2Input { get; }
```

- *Type:* string

---

##### `Line3Input`<sup>Optional</sup> <a name="Line3Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input"></a>

```csharp
public string Line3Input { get; }
```

- *Type:* string

---

##### `Line4Input`<sup>Optional</sup> <a name="Line4Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input"></a>

```csharp
public string Line4Input { get; }
```

- *Type:* string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput"></a>

```csharp
public string MiddleNameInput { get; }
```

- *Type:* string

---

##### `MunicipalInscriptionInput`<sup>Optional</sup> <a name="MunicipalInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput"></a>

```csharp
public string MunicipalInscriptionInput { get; }
```

- *Type:* string

---

##### `PhoneCountryCodeInput`<sup>Optional</sup> <a name="PhoneCountryCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput"></a>

```csharp
public string PhoneCountryCodeInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StateInscriptionInput`<sup>Optional</sup> <a name="StateInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput"></a>

```csharp
public string StateInscriptionInput { get; }
```

- *Type:* string

---

##### `StreetNameInput`<sup>Optional</sup> <a name="StreetNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput"></a>

```csharp
public string StreetNameInput { get; }
```

- *Type:* string

---

##### `StreetNumberInput`<sup>Optional</sup> <a name="StreetNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput"></a>

```csharp
public string StreetNumberInput { get; }
```

- *Type:* string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```csharp
public string AddressKey { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```csharp
public string ContributorClass { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```csharp
public string DepartmentName { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```csharp
public string InternalNumber { get; }
```

- *Type:* string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```csharp
public string JobTitle { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1"></a>

```csharp
public string Line1 { get; }
```

- *Type:* string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2"></a>

```csharp
public string Line2 { get; }
```

- *Type:* string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3"></a>

```csharp
public string Line3 { get; }
```

- *Type:* string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4"></a>

```csharp
public string Line4 { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```csharp
public string MunicipalInscription { get; }
```

- *Type:* string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```csharp
public string PhoneCountryCode { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```csharp
public string StateInscription { get; }
```

- *Type:* string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName"></a>

```csharp
public string StreetName { get; }
```

- *Type:* string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```csharp
public string StreetNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OspGatewaySubscriptionSubscriptionOutputReference <a name="OspGatewaySubscriptionSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress">PutBillingAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway">PutPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions">PutPaymentOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo">PutTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType">ResetAccountType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress">ResetBillingAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId">ResetBillToCustAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode">ResetCurrencyCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode">ResetGsiOrgCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay">ResetIsIntentToPay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway">ResetPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions">ResetPaymentOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType">ResetPlanType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId">ResetShipToCustAcctRoleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId">ResetShipToCustAcctSiteId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo">ResetTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv">ResetTimePersonalToCorporateConv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade">ResetTimePlanUpgrade</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart">ResetTimeStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState">ResetUpgradeState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails">ResetUpgradeStateDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBillingAddress` <a name="PutBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress"></a>

```csharp
private void PutBillingAddress(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress.parameter.value"></a>

- *Type:* object

---

##### `PutPaymentGateway` <a name="PutPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway"></a>

```csharp
private void PutPaymentGateway(OspGatewaySubscriptionSubscriptionPaymentGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `PutPaymentOptions` <a name="PutPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions"></a>

```csharp
private void PutPaymentOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions.parameter.value"></a>

- *Type:* object

---

##### `PutTaxInfo` <a name="PutTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo"></a>

```csharp
private void PutTaxInfo(OspGatewaySubscriptionSubscriptionTaxInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `ResetAccountType` <a name="ResetAccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType"></a>

```csharp
private void ResetAccountType()
```

##### `ResetBillingAddress` <a name="ResetBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress"></a>

```csharp
private void ResetBillingAddress()
```

##### `ResetBillToCustAccountId` <a name="ResetBillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId"></a>

```csharp
private void ResetBillToCustAccountId()
```

##### `ResetCurrencyCode` <a name="ResetCurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode"></a>

```csharp
private void ResetCurrencyCode()
```

##### `ResetGsiOrgCode` <a name="ResetGsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode"></a>

```csharp
private void ResetGsiOrgCode()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsIntentToPay` <a name="ResetIsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay"></a>

```csharp
private void ResetIsIntentToPay()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode"></a>

```csharp
private void ResetLanguageCode()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

##### `ResetPaymentGateway` <a name="ResetPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway"></a>

```csharp
private void ResetPaymentGateway()
```

##### `ResetPaymentOptions` <a name="ResetPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions"></a>

```csharp
private void ResetPaymentOptions()
```

##### `ResetPlanType` <a name="ResetPlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType"></a>

```csharp
private void ResetPlanType()
```

##### `ResetShipToCustAcctRoleId` <a name="ResetShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId"></a>

```csharp
private void ResetShipToCustAcctRoleId()
```

##### `ResetShipToCustAcctSiteId` <a name="ResetShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId"></a>

```csharp
private void ResetShipToCustAcctSiteId()
```

##### `ResetTaxInfo` <a name="ResetTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo"></a>

```csharp
private void ResetTaxInfo()
```

##### `ResetTimePersonalToCorporateConv` <a name="ResetTimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv"></a>

```csharp
private void ResetTimePersonalToCorporateConv()
```

##### `ResetTimePlanUpgrade` <a name="ResetTimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade"></a>

```csharp
private void ResetTimePlanUpgrade()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart"></a>

```csharp
private void ResetTimeStart()
```

##### `ResetUpgradeState` <a name="ResetUpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState"></a>

```csharp
private void ResetUpgradeState()
```

##### `ResetUpgradeStateDetails` <a name="ResetUpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails"></a>

```csharp
private void ResetUpgradeStateDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress">BillingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions">PaymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput">AccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput">BillingAddressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput">BillToCustAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput">CurrencyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput">GsiOrgCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput">IsIntentToPayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput">PaymentGatewayInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput">PaymentOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput">PlanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput">ShipToCustAcctRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput">ShipToCustAcctSiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput">SubscriptionPlanNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput">TaxInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput">TimePersonalToCorporateConvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput">TimePlanUpgradeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput">TimeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput">UpgradeStateDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput">UpgradeStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType">AccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode">GsiOrgCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType">PlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState">UpgradeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress"></a>

```csharp
public OspGatewaySubscriptionSubscriptionBillingAddressList BillingAddress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a>

---

##### `PaymentGateway`<sup>Required</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference PaymentGateway { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a>

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentOptionsList PaymentOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a>

---

##### `TaxInfo`<sup>Required</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo"></a>

```csharp
public OspGatewaySubscriptionSubscriptionTaxInfoOutputReference TaxInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a>

---

##### `AccountTypeInput`<sup>Optional</sup> <a name="AccountTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput"></a>

```csharp
public string AccountTypeInput { get; }
```

- *Type:* string

---

##### `BillingAddressInput`<sup>Optional</sup> <a name="BillingAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput"></a>

```csharp
public object BillingAddressInput { get; }
```

- *Type:* object

---

##### `BillToCustAccountIdInput`<sup>Optional</sup> <a name="BillToCustAccountIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput"></a>

```csharp
public string BillToCustAccountIdInput { get; }
```

- *Type:* string

---

##### `CurrencyCodeInput`<sup>Optional</sup> <a name="CurrencyCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput"></a>

```csharp
public string CurrencyCodeInput { get; }
```

- *Type:* string

---

##### `GsiOrgCodeInput`<sup>Optional</sup> <a name="GsiOrgCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput"></a>

```csharp
public string GsiOrgCodeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsIntentToPayInput`<sup>Optional</sup> <a name="IsIntentToPayInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput"></a>

```csharp
public object IsIntentToPayInput { get; }
```

- *Type:* object

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `PaymentGatewayInput`<sup>Optional</sup> <a name="PaymentGatewayInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentGateway PaymentGatewayInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `PaymentOptionsInput`<sup>Optional</sup> <a name="PaymentOptionsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput"></a>

```csharp
public object PaymentOptionsInput { get; }
```

- *Type:* object

---

##### `PlanTypeInput`<sup>Optional</sup> <a name="PlanTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput"></a>

```csharp
public string PlanTypeInput { get; }
```

- *Type:* string

---

##### `ShipToCustAcctRoleIdInput`<sup>Optional</sup> <a name="ShipToCustAcctRoleIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput"></a>

```csharp
public string ShipToCustAcctRoleIdInput { get; }
```

- *Type:* string

---

##### `ShipToCustAcctSiteIdInput`<sup>Optional</sup> <a name="ShipToCustAcctSiteIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput"></a>

```csharp
public string ShipToCustAcctSiteIdInput { get; }
```

- *Type:* string

---

##### `SubscriptionPlanNumberInput`<sup>Optional</sup> <a name="SubscriptionPlanNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput"></a>

```csharp
public string SubscriptionPlanNumberInput { get; }
```

- *Type:* string

---

##### `TaxInfoInput`<sup>Optional</sup> <a name="TaxInfoInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput"></a>

```csharp
public OspGatewaySubscriptionSubscriptionTaxInfo TaxInfoInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `TimePersonalToCorporateConvInput`<sup>Optional</sup> <a name="TimePersonalToCorporateConvInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput"></a>

```csharp
public string TimePersonalToCorporateConvInput { get; }
```

- *Type:* string

---

##### `TimePlanUpgradeInput`<sup>Optional</sup> <a name="TimePlanUpgradeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput"></a>

```csharp
public string TimePlanUpgradeInput { get; }
```

- *Type:* string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput"></a>

```csharp
public string TimeStartInput { get; }
```

- *Type:* string

---

##### `UpgradeStateDetailsInput`<sup>Optional</sup> <a name="UpgradeStateDetailsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput"></a>

```csharp
public string UpgradeStateDetailsInput { get; }
```

- *Type:* string

---

##### `UpgradeStateInput`<sup>Optional</sup> <a name="UpgradeStateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput"></a>

```csharp
public string UpgradeStateInput { get; }
```

- *Type:* string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType"></a>

```csharp
public string AccountType { get; }
```

- *Type:* string

---

##### `BillToCustAccountId`<sup>Required</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId"></a>

```csharp
public string BillToCustAccountId { get; }
```

- *Type:* string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `GsiOrgCode`<sup>Required</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode"></a>

```csharp
public string GsiOrgCode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay"></a>

```csharp
public object IsIntentToPay { get; }
```

- *Type:* object

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType"></a>

```csharp
public string PlanType { get; }
```

- *Type:* string

---

##### `ShipToCustAcctRoleId`<sup>Required</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```csharp
public string ShipToCustAcctRoleId { get; }
```

- *Type:* string

---

##### `ShipToCustAcctSiteId`<sup>Required</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```csharp
public string ShipToCustAcctSiteId { get; }
```

- *Type:* string

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```csharp
public string SubscriptionPlanNumber { get; }
```

- *Type:* string

---

##### `TimePersonalToCorporateConv`<sup>Required</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```csharp
public string TimePersonalToCorporateConv { get; }
```

- *Type:* string

---

##### `TimePlanUpgrade`<sup>Required</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade"></a>

```csharp
public string TimePlanUpgrade { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `UpgradeState`<sup>Required</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState"></a>

```csharp
public string UpgradeState { get; }
```

- *Type:* string

---

##### `UpgradeStateDetails`<sup>Required</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails"></a>

```csharp
public string UpgradeStateDetails { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionSubscription InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName">ResetCloudAccountName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType">ResetPromoType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudAccountName` <a name="ResetCloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName"></a>

```csharp
private void ResetCloudAccountName()
```

##### `ResetPromoType` <a name="ResetPromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType"></a>

```csharp
private void ResetPromoType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput">CloudAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput">PromoTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">PromoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudAccountNameInput`<sup>Optional</sup> <a name="CloudAccountNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput"></a>

```csharp
public string CloudAccountNameInput { get; }
```

- *Type:* string

---

##### `PromoTypeInput`<sup>Optional</sup> <a name="PromoTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput"></a>

```csharp
public string PromoTypeInput { get; }
```

- *Type:* string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```csharp
public string CloudAccountName { get; }
```

- *Type:* string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```csharp
public string PromoType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData">PutMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData">ResetMerchantDefinedData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMerchantDefinedData` <a name="PutMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData"></a>

```csharp
private void PutMerchantDefinedData(OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `ResetMerchantDefinedData` <a name="ResetMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData"></a>

```csharp
private void ResetMerchantDefinedData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput">MerchantDefinedDataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MerchantDefinedData`<sup>Required</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference MerchantDefinedData { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a>

---

##### `MerchantDefinedDataInput`<sup>Optional</sup> <a name="MerchantDefinedDataInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData MerchantDefinedDataInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionSubscriptionPaymentGateway InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionPaymentOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get"></a>

```csharp
private OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType">ResetCreditCardType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId">ResetExtBillingAgreementId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits">ResetLastDigits</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard">ResetNameOnCard</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration">ResetTimeExpiration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId">ResetWalletInstrumentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId">ResetWalletTransactionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreditCardType` <a name="ResetCreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType"></a>

```csharp
private void ResetCreditCardType()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetExtBillingAgreementId` <a name="ResetExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId"></a>

```csharp
private void ResetExtBillingAgreementId()
```

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetLastDigits` <a name="ResetLastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits"></a>

```csharp
private void ResetLastDigits()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetNameOnCard` <a name="ResetNameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard"></a>

```csharp
private void ResetNameOnCard()
```

##### `ResetTimeExpiration` <a name="ResetTimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration"></a>

```csharp
private void ResetTimeExpiration()
```

##### `ResetWalletInstrumentId` <a name="ResetWalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId"></a>

```csharp
private void ResetWalletInstrumentId()
```

##### `ResetWalletTransactionId` <a name="ResetWalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId"></a>

```csharp
private void ResetWalletTransactionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput">CreditCardTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput">ExtBillingAgreementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput">LastDigitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput">NameOnCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput">PaymentMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput">TimeExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput">WalletInstrumentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput">WalletTransactionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType">CreditCardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits">LastDigits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">WalletTransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreditCardTypeInput`<sup>Optional</sup> <a name="CreditCardTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput"></a>

```csharp
public string CreditCardTypeInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `ExtBillingAgreementIdInput`<sup>Optional</sup> <a name="ExtBillingAgreementIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput"></a>

```csharp
public string ExtBillingAgreementIdInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastDigitsInput`<sup>Optional</sup> <a name="LastDigitsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput"></a>

```csharp
public string LastDigitsInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `NameOnCardInput`<sup>Optional</sup> <a name="NameOnCardInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput"></a>

```csharp
public string NameOnCardInput { get; }
```

- *Type:* string

---

##### `PaymentMethodInput`<sup>Optional</sup> <a name="PaymentMethodInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput"></a>

```csharp
public string PaymentMethodInput { get; }
```

- *Type:* string

---

##### `TimeExpirationInput`<sup>Optional</sup> <a name="TimeExpirationInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput"></a>

```csharp
public string TimeExpirationInput { get; }
```

- *Type:* string

---

##### `WalletInstrumentIdInput`<sup>Optional</sup> <a name="WalletInstrumentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput"></a>

```csharp
public string WalletInstrumentIdInput { get; }
```

- *Type:* string

---

##### `WalletTransactionIdInput`<sup>Optional</sup> <a name="WalletTransactionIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput"></a>

```csharp
public string WalletTransactionIdInput { get; }
```

- *Type:* string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```csharp
public string CreditCardType { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `ExtBillingAgreementId`<sup>Required</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```csharp
public string ExtBillingAgreementId { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```csharp
public string LastDigits { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```csharp
public string NameOnCard { get; }
```

- *Type:* string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```csharp
public string PaymentMethod { get; }
```

- *Type:* string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```csharp
public string TimeExpiration { get; }
```

- *Type:* string

---

##### `WalletInstrumentId`<sup>Required</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```csharp
public string WalletInstrumentId { get; }
```

- *Type:* string

---

##### `WalletTransactionId`<sup>Required</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```csharp
public string WalletTransactionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OspGatewaySubscriptionSubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionSubscriptionTaxInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode">ResetNoTaxReasonCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails">ResetNoTaxReasonCodeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj">ResetTaxCnpj</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId">ResetTaxPayerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber">ResetTaxRegNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoTaxReasonCode` <a name="ResetNoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode"></a>

```csharp
private void ResetNoTaxReasonCode()
```

##### `ResetNoTaxReasonCodeDetails` <a name="ResetNoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails"></a>

```csharp
private void ResetNoTaxReasonCodeDetails()
```

##### `ResetTaxCnpj` <a name="ResetTaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj"></a>

```csharp
private void ResetTaxCnpj()
```

##### `ResetTaxPayerId` <a name="ResetTaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId"></a>

```csharp
private void ResetTaxPayerId()
```

##### `ResetTaxRegNumber` <a name="ResetTaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber"></a>

```csharp
private void ResetTaxRegNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput">NoTaxReasonCodeDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput">NoTaxReasonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput">TaxCnpjInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput">TaxPayerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput">TaxRegNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj">TaxCnpj</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId">TaxPayerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber">TaxRegNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NoTaxReasonCodeDetailsInput`<sup>Optional</sup> <a name="NoTaxReasonCodeDetailsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput"></a>

```csharp
public string NoTaxReasonCodeDetailsInput { get; }
```

- *Type:* string

---

##### `NoTaxReasonCodeInput`<sup>Optional</sup> <a name="NoTaxReasonCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput"></a>

```csharp
public string NoTaxReasonCodeInput { get; }
```

- *Type:* string

---

##### `TaxCnpjInput`<sup>Optional</sup> <a name="TaxCnpjInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput"></a>

```csharp
public string TaxCnpjInput { get; }
```

- *Type:* string

---

##### `TaxPayerIdInput`<sup>Optional</sup> <a name="TaxPayerIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput"></a>

```csharp
public string TaxPayerIdInput { get; }
```

- *Type:* string

---

##### `TaxRegNumberInput`<sup>Optional</sup> <a name="TaxRegNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput"></a>

```csharp
public string TaxRegNumberInput { get; }
```

- *Type:* string

---

##### `NoTaxReasonCode`<sup>Required</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```csharp
public string NoTaxReasonCode { get; }
```

- *Type:* string

---

##### `NoTaxReasonCodeDetails`<sup>Required</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```csharp
public string NoTaxReasonCodeDetails { get; }
```

- *Type:* string

---

##### `TaxCnpj`<sup>Required</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```csharp
public string TaxCnpj { get; }
```

- *Type:* string

---

##### `TaxPayerId`<sup>Required</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```csharp
public string TaxPayerId { get; }
```

- *Type:* string

---

##### `TaxRegNumber`<sup>Required</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```csharp
public string TaxRegNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionSubscriptionTaxInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTaxInfoList <a name="OspGatewaySubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionTaxInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get"></a>

```csharp
private OspGatewaySubscriptionTaxInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OspGatewaySubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionTaxInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro">Giro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj">TaxCnpj</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId">TaxPayerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber">TaxRegNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Giro`<sup>Required</sup> <a name="Giro" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro"></a>

```csharp
public string Giro { get; }
```

- *Type:* string

---

##### `NoTaxReasonCode`<sup>Required</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```csharp
public string NoTaxReasonCode { get; }
```

- *Type:* string

---

##### `NoTaxReasonCodeDetails`<sup>Required</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```csharp
public string NoTaxReasonCodeDetails { get; }
```

- *Type:* string

---

##### `TaxCnpj`<sup>Required</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```csharp
public string TaxCnpj { get; }
```

- *Type:* string

---

##### `TaxPayerId`<sup>Required</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```csharp
public string TaxPayerId { get; }
```

- *Type:* string

---

##### `TaxRegNumber`<sup>Required</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```csharp
public string TaxRegNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue"></a>

```csharp
public OspGatewaySubscriptionTaxInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTimeoutsOutputReference <a name="OspGatewaySubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewaySubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



