# `integrationPrivateEndpointOutboundConnection` Submodule <a name="`integrationPrivateEndpointOutboundConnection` Submodule" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPrivateEndpointOutboundConnection <a name="IntegrationPrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection oci_integration_private_endpoint_outbound_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationPrivateEndpointOutboundConnection(Construct Scope, string Id, IntegrationPrivateEndpointOutboundConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig">IntegrationPrivateEndpointOutboundConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig">IntegrationPrivateEndpointOutboundConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(IntegrationPrivateEndpointOutboundConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationPrivateEndpointOutboundConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IntegrationPrivateEndpointOutboundConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IntegrationPrivateEndpointOutboundConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IntegrationPrivateEndpointOutboundConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IntegrationPrivateEndpointOutboundConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationPrivateEndpointOutboundConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationPrivateEndpointOutboundConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationPrivateEndpointOutboundConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationPrivateEndpointOutboundConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference">IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceIdInput">IntegrationInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceId">IntegrationInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeouts"></a>

```csharp
public IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference">IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationInstanceIdInput`<sup>Optional</sup> <a name="IntegrationInstanceIdInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceIdInput"></a>

```csharp
public string IntegrationInstanceIdInput { get; }
```

- *Type:* string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationInstanceId`<sup>Required</sup> <a name="IntegrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceId"></a>

```csharp
public string IntegrationInstanceId { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPrivateEndpointOutboundConnectionConfig <a name="IntegrationPrivateEndpointOutboundConnectionConfig" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationPrivateEndpointOutboundConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IntegrationInstanceId,
    string SubnetId,
    string Id = null,
    string[] NsgIds = null,
    string State = null,
    IntegrationPrivateEndpointOutboundConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.integrationInstanceId">IntegrationInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IntegrationInstanceId`<sup>Required</sup> <a name="IntegrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.integrationInstanceId"></a>

```csharp
public string IntegrationInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.timeouts"></a>

```csharp
public IntegrationPrivateEndpointOutboundConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#timeouts IntegrationPrivateEndpointOutboundConnection#timeouts}

---

### IntegrationPrivateEndpointOutboundConnectionTimeouts <a name="IntegrationPrivateEndpointOutboundConnectionTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationPrivateEndpointOutboundConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference <a name="IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



