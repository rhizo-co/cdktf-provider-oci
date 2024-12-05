# `analyticsAnalyticsInstanceVanityUrl` Submodule <a name="`analyticsAnalyticsInstanceVanityUrl` Submodule" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnalyticsAnalyticsInstanceVanityUrl <a name="AnalyticsAnalyticsInstanceVanityUrl" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url oci_analytics_analytics_instance_vanity_url}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AnalyticsAnalyticsInstanceVanityUrl(Construct Scope, string Id, AnalyticsAnalyticsInstanceVanityUrlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig">AnalyticsAnalyticsInstanceVanityUrlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig">AnalyticsAnalyticsInstanceVanityUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetPassphrase">ResetPassphrase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts"></a>

```csharp
private void PutTimeouts(AnalyticsAnalyticsInstanceVanityUrlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassphrase` <a name="ResetPassphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetPassphrase"></a>

```csharp
private void ResetPassphrase()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AnalyticsAnalyticsInstanceVanityUrl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AnalyticsAnalyticsInstanceVanityUrl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AnalyticsAnalyticsInstanceVanityUrl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AnalyticsAnalyticsInstanceVanityUrl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

AnalyticsAnalyticsInstanceVanityUrl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AnalyticsAnalyticsInstanceVanityUrl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AnalyticsAnalyticsInstanceVanityUrl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AnalyticsAnalyticsInstanceVanityUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AnalyticsAnalyticsInstanceVanityUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference">AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceIdInput">AnalyticsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificateInput">CaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphraseInput">PassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificateInput">PublicCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceId">AnalyticsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificate">CaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeouts"></a>

```csharp
public AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference">AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference</a>

---

##### `AnalyticsInstanceIdInput`<sup>Optional</sup> <a name="AnalyticsInstanceIdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceIdInput"></a>

```csharp
public string AnalyticsInstanceIdInput { get; }
```

- *Type:* string

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificateInput"></a>

```csharp
public string CaCertificateInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PassphraseInput`<sup>Optional</sup> <a name="PassphraseInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphraseInput"></a>

```csharp
public string PassphraseInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `PublicCertificateInput`<sup>Optional</sup> <a name="PublicCertificateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificateInput"></a>

```csharp
public string PublicCertificateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AnalyticsInstanceId`<sup>Required</sup> <a name="AnalyticsInstanceId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.analyticsInstanceId"></a>

```csharp
public string AnalyticsInstanceId { get; }
```

- *Type:* string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.caCertificate"></a>

```csharp
public string CaCertificate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AnalyticsAnalyticsInstanceVanityUrlConfig <a name="AnalyticsAnalyticsInstanceVanityUrlConfig" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AnalyticsAnalyticsInstanceVanityUrlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AnalyticsInstanceId,
    string CaCertificate,
    string[] Hosts,
    string PrivateKey,
    string PublicCertificate,
    string Description = null,
    string Id = null,
    string Passphrase = null,
    AnalyticsAnalyticsInstanceVanityUrlTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.analyticsInstanceId">AnalyticsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#analytics_instance_id AnalyticsAnalyticsInstanceVanityUrl#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.caCertificate">CaCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#ca_certificate AnalyticsAnalyticsInstanceVanityUrl#ca_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.hosts">Hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#hosts AnalyticsAnalyticsInstanceVanityUrl#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#private_key AnalyticsAnalyticsInstanceVanityUrl#private_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#public_certificate AnalyticsAnalyticsInstanceVanityUrl#public_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#description AnalyticsAnalyticsInstanceVanityUrl#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#id AnalyticsAnalyticsInstanceVanityUrl#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.passphrase">Passphrase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#passphrase AnalyticsAnalyticsInstanceVanityUrl#passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AnalyticsInstanceId`<sup>Required</sup> <a name="AnalyticsInstanceId" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.analyticsInstanceId"></a>

```csharp
public string AnalyticsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#analytics_instance_id AnalyticsAnalyticsInstanceVanityUrl#analytics_instance_id}.

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.caCertificate"></a>

```csharp
public string CaCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#ca_certificate AnalyticsAnalyticsInstanceVanityUrl#ca_certificate}.

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#hosts AnalyticsAnalyticsInstanceVanityUrl#hosts}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#private_key AnalyticsAnalyticsInstanceVanityUrl#private_key}.

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#public_certificate AnalyticsAnalyticsInstanceVanityUrl#public_certificate}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#description AnalyticsAnalyticsInstanceVanityUrl#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#id AnalyticsAnalyticsInstanceVanityUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Passphrase`<sup>Optional</sup> <a name="Passphrase" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.passphrase"></a>

```csharp
public string Passphrase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#passphrase AnalyticsAnalyticsInstanceVanityUrl#passphrase}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlConfig.property.timeouts"></a>

```csharp
public AnalyticsAnalyticsInstanceVanityUrlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts">AnalyticsAnalyticsInstanceVanityUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#timeouts AnalyticsAnalyticsInstanceVanityUrl#timeouts}

---

### AnalyticsAnalyticsInstanceVanityUrlTimeouts <a name="AnalyticsAnalyticsInstanceVanityUrlTimeouts" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AnalyticsAnalyticsInstanceVanityUrlTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#create AnalyticsAnalyticsInstanceVanityUrl#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#delete AnalyticsAnalyticsInstanceVanityUrl#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#update AnalyticsAnalyticsInstanceVanityUrl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#create AnalyticsAnalyticsInstanceVanityUrl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#delete AnalyticsAnalyticsInstanceVanityUrl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/analytics_analytics_instance_vanity_url#update AnalyticsAnalyticsInstanceVanityUrl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference <a name="AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.analyticsAnalyticsInstanceVanityUrl.AnalyticsAnalyticsInstanceVanityUrlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



