# `loadBalancerBackendset` Submodule <a name="`loadBalancerBackendset` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerBackendset <a name="LoadBalancerBackendset" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset oci_load_balancer_backendset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendset(Construct Scope, string Id, LoadBalancerBackendsetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig">LoadBalancerBackendsetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig">LoadBalancerBackendsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker">PutHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration">PutLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration">PutSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration">PutSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections">ResetBackendMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration">ResetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration">ResetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration">ResetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthChecker` <a name="PutHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker"></a>

```csharp
private void PutHealthChecker(LoadBalancerBackendsetHealthChecker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `PutLbCookieSessionPersistenceConfiguration` <a name="PutLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration"></a>

```csharp
private void PutLbCookieSessionPersistenceConfiguration(LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `PutSessionPersistenceConfiguration` <a name="PutSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration"></a>

```csharp
private void PutSessionPersistenceConfiguration(LoadBalancerBackendsetSessionPersistenceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `PutSslConfiguration` <a name="PutSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration"></a>

```csharp
private void PutSslConfiguration(LoadBalancerBackendsetSslConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts"></a>

```csharp
private void PutTimeouts(LoadBalancerBackendsetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

---

##### `ResetBackendMaxConnections` <a name="ResetBackendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections"></a>

```csharp
private void ResetBackendMaxConnections()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLbCookieSessionPersistenceConfiguration` <a name="ResetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration"></a>

```csharp
private void ResetLbCookieSessionPersistenceConfiguration()
```

##### `ResetSessionPersistenceConfiguration` <a name="ResetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration"></a>

```csharp
private void ResetSessionPersistenceConfiguration()
```

##### `ResetSslConfiguration` <a name="ResetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration"></a>

```csharp
private void ResetSslConfiguration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LoadBalancerBackendset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LoadBalancerBackendset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LoadBalancerBackendset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LoadBalancerBackendset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerBackendset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerBackendset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerBackendset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend">Backend</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration">LbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration">SessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput">BackendMaxConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput">HealthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput">LbCookieSessionPersistenceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput">SessionPersistenceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput">SslConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections">BackendMaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy">Policy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend"></a>

```csharp
public LoadBalancerBackendsetBackendList Backend { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a>

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker"></a>

```csharp
public LoadBalancerBackendsetHealthCheckerOutputReference HealthChecker { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a>

---

##### `LbCookieSessionPersistenceConfiguration`<sup>Required</sup> <a name="LbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration"></a>

```csharp
public LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference LbCookieSessionPersistenceConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a>

---

##### `SessionPersistenceConfiguration`<sup>Required</sup> <a name="SessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration"></a>

```csharp
public LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference SessionPersistenceConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a>

---

##### `SslConfiguration`<sup>Required</sup> <a name="SslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration"></a>

```csharp
public LoadBalancerBackendsetSslConfigurationOutputReference SslConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts"></a>

```csharp
public LoadBalancerBackendsetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a>

---

##### `BackendMaxConnectionsInput`<sup>Optional</sup> <a name="BackendMaxConnectionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput"></a>

```csharp
public double BackendMaxConnectionsInput { get; }
```

- *Type:* double

---

##### `HealthCheckerInput`<sup>Optional</sup> <a name="HealthCheckerInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput"></a>

```csharp
public LoadBalancerBackendsetHealthChecker HealthCheckerInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LbCookieSessionPersistenceConfigurationInput`<sup>Optional</sup> <a name="LbCookieSessionPersistenceConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput"></a>

```csharp
public LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration LbCookieSessionPersistenceConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `SessionPersistenceConfigurationInput`<sup>Optional</sup> <a name="SessionPersistenceConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput"></a>

```csharp
public LoadBalancerBackendsetSessionPersistenceConfiguration SessionPersistenceConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `SslConfigurationInput`<sup>Optional</sup> <a name="SslConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput"></a>

```csharp
public LoadBalancerBackendsetSslConfiguration SslConfigurationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BackendMaxConnections`<sup>Required</sup> <a name="BackendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections"></a>

```csharp
public double BackendMaxConnections { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerBackendsetBackend <a name="LoadBalancerBackendsetBackend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetBackend {

};
```


### LoadBalancerBackendsetConfig <a name="LoadBalancerBackendsetConfig" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    LoadBalancerBackendsetHealthChecker HealthChecker,
    string LoadBalancerId,
    string Name,
    string Policy,
    double BackendMaxConnections = null,
    string Id = null,
    LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration LbCookieSessionPersistenceConfiguration = null,
    LoadBalancerBackendsetSessionPersistenceConfiguration SessionPersistenceConfiguration = null,
    LoadBalancerBackendsetSslConfiguration SslConfiguration = null,
    LoadBalancerBackendsetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections">BackendMaxConnections</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration">LbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | lb_cookie_session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration">SessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker"></a>

```csharp
public LoadBalancerBackendsetHealthChecker HealthChecker { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#health_checker LoadBalancerBackendset#health_checker}

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}.

---

##### `BackendMaxConnections`<sup>Optional</sup> <a name="BackendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections"></a>

```csharp
public double BackendMaxConnections { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LbCookieSessionPersistenceConfiguration`<sup>Optional</sup> <a name="LbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration"></a>

```csharp
public LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration LbCookieSessionPersistenceConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

lb_cookie_session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#lb_cookie_session_persistence_configuration LoadBalancerBackendset#lb_cookie_session_persistence_configuration}

---

##### `SessionPersistenceConfiguration`<sup>Optional</sup> <a name="SessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration"></a>

```csharp
public LoadBalancerBackendsetSessionPersistenceConfiguration SessionPersistenceConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#session_persistence_configuration LoadBalancerBackendset#session_persistence_configuration}

---

##### `SslConfiguration`<sup>Optional</sup> <a name="SslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration"></a>

```csharp
public LoadBalancerBackendsetSslConfiguration SslConfiguration { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#ssl_configuration LoadBalancerBackendset#ssl_configuration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts"></a>

```csharp
public LoadBalancerBackendsetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeouts LoadBalancerBackendset#timeouts}

---

### LoadBalancerBackendsetHealthChecker <a name="LoadBalancerBackendsetHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetHealthChecker {
    string Protocol,
    double IntervalMs = null,
    object IsForcePlainText = null,
    double Port = null,
    string ResponseBodyRegex = null,
    double Retries = null,
    double ReturnCode = null,
    double TimeoutInMillis = null,
    string UrlPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs">IntervalMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText">IsForcePlainText</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries">Retries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode">ReturnCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath">UrlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}.

---

##### `IntervalMs`<sup>Optional</sup> <a name="IntervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs"></a>

```csharp
public double IntervalMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}.

---

##### `IsForcePlainText`<sup>Optional</sup> <a name="IsForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText"></a>

```csharp
public object IsForcePlainText { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}.

---

##### `ResponseBodyRegex`<sup>Optional</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex"></a>

```csharp
public string ResponseBodyRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}.

---

##### `ReturnCode`<sup>Optional</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode"></a>

```csharp
public double ReturnCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}.

---

##### `TimeoutInMillis`<sup>Optional</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis"></a>

```csharp
public double TimeoutInMillis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}.

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath"></a>

```csharp
public string UrlPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}.

---

### LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration {
    string CookieName = null,
    object DisableFallback = null,
    string Domain = null,
    object IsHttpOnly = null,
    object IsSecure = null,
    double MaxAgeInSeconds = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName">CookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback">DisableFallback</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly">IsHttpOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure">IsSecure</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}. |

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName"></a>

```csharp
public string CookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `DisableFallback`<sup>Optional</sup> <a name="DisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback"></a>

```csharp
public object DisableFallback { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}.

---

##### `IsHttpOnly`<sup>Optional</sup> <a name="IsHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly"></a>

```csharp
public object IsHttpOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}.

---

##### `IsSecure`<sup>Optional</sup> <a name="IsSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure"></a>

```csharp
public object IsSecure { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}.

---

##### `MaxAgeInSeconds`<sup>Optional</sup> <a name="MaxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}.

---

### LoadBalancerBackendsetSessionPersistenceConfiguration <a name="LoadBalancerBackendsetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetSessionPersistenceConfiguration {
    string CookieName,
    object DisableFallback = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName">CookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback">DisableFallback</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName"></a>

```csharp
public string CookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `DisableFallback`<sup>Optional</sup> <a name="DisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback"></a>

```csharp
public object DisableFallback { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

### LoadBalancerBackendsetSslConfiguration <a name="LoadBalancerBackendsetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetSslConfiguration {
    string[] CertificateIds = null,
    string CertificateName = null,
    string CipherSuiteName = null,
    string[] Protocols = null,
    string ServerOrderPreference = null,
    string[] TrustedCertificateAuthorityIds = null,
    double VerifyDepth = null,
    object VerifyPeerCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds">CertificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName">CertificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName">CipherSuiteName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds">TrustedCertificateAuthorityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth">VerifyDepth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate">VerifyPeerCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}. |

---

##### `CertificateIds`<sup>Optional</sup> <a name="CertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds"></a>

```csharp
public string[] CertificateIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}.

---

##### `CipherSuiteName`<sup>Optional</sup> <a name="CipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName"></a>

```csharp
public string CipherSuiteName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}.

---

##### `ServerOrderPreference`<sup>Optional</sup> <a name="ServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference"></a>

```csharp
public string ServerOrderPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}.

---

##### `TrustedCertificateAuthorityIds`<sup>Optional</sup> <a name="TrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```csharp
public string[] TrustedCertificateAuthorityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}.

---

##### `VerifyDepth`<sup>Optional</sup> <a name="VerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth"></a>

```csharp
public double VerifyDepth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}.

---

##### `VerifyPeerCertificate`<sup>Optional</sup> <a name="VerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate"></a>

```csharp
public object VerifyPeerCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}.

---

### LoadBalancerBackendsetTimeouts <a name="LoadBalancerBackendsetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerBackendsetBackendList <a name="LoadBalancerBackendsetBackendList" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetBackendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get"></a>

```csharp
private LoadBalancerBackendsetBackendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### LoadBalancerBackendsetBackendOutputReference <a name="LoadBalancerBackendsetBackendOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup">Backup</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain">Drain</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline">Offline</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup"></a>

```csharp
public IResolvable Backup { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Drain`<sup>Required</sup> <a name="Drain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain"></a>

```csharp
public IResolvable Drain { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Offline`<sup>Required</sup> <a name="Offline" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline"></a>

```csharp
public IResolvable Offline { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue"></a>

```csharp
public LoadBalancerBackendsetBackend InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a>

---


### LoadBalancerBackendsetHealthCheckerOutputReference <a name="LoadBalancerBackendsetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetHealthCheckerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs">ResetIntervalMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText">ResetIsForcePlainText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex">ResetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode">ResetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis">ResetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath">ResetUrlPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntervalMs` <a name="ResetIntervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs"></a>

```csharp
private void ResetIntervalMs()
```

##### `ResetIsForcePlainText` <a name="ResetIsForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText"></a>

```csharp
private void ResetIsForcePlainText()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetResponseBodyRegex` <a name="ResetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```csharp
private void ResetResponseBodyRegex()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetReturnCode` <a name="ResetReturnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode"></a>

```csharp
private void ResetReturnCode()
```

##### `ResetTimeoutInMillis` <a name="ResetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```csharp
private void ResetTimeoutInMillis()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath"></a>

```csharp
private void ResetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput">IntervalMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput">IsForcePlainTextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput">ResponseBodyRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput">ReturnCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput">TimeoutInMillisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput">UrlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs">IntervalMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText">IsForcePlainText</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode">ReturnCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalMsInput`<sup>Optional</sup> <a name="IntervalMsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput"></a>

```csharp
public double IntervalMsInput { get; }
```

- *Type:* double

---

##### `IsForcePlainTextInput`<sup>Optional</sup> <a name="IsForcePlainTextInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput"></a>

```csharp
public object IsForcePlainTextInput { get; }
```

- *Type:* object

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ResponseBodyRegexInput`<sup>Optional</sup> <a name="ResponseBodyRegexInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```csharp
public string ResponseBodyRegexInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `ReturnCodeInput`<sup>Optional</sup> <a name="ReturnCodeInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput"></a>

```csharp
public double ReturnCodeInput { get; }
```

- *Type:* double

---

##### `TimeoutInMillisInput`<sup>Optional</sup> <a name="TimeoutInMillisInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```csharp
public double TimeoutInMillisInput { get; }
```

- *Type:* double

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput"></a>

```csharp
public string UrlPathInput { get; }
```

- *Type:* string

---

##### `IntervalMs`<sup>Required</sup> <a name="IntervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs"></a>

```csharp
public double IntervalMs { get; }
```

- *Type:* double

---

##### `IsForcePlainText`<sup>Required</sup> <a name="IsForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText"></a>

```csharp
public object IsForcePlainText { get; }
```

- *Type:* object

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ResponseBodyRegex`<sup>Required</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```csharp
public string ResponseBodyRegex { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `ReturnCode`<sup>Required</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode"></a>

```csharp
public double ReturnCode { get; }
```

- *Type:* double

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```csharp
public double TimeoutInMillis { get; }
```

- *Type:* double

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue"></a>

```csharp
public LoadBalancerBackendsetHealthChecker InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---


### LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName">ResetCookieName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback">ResetDisableFallback</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly">ResetIsHttpOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure">ResetIsSecure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds">ResetMaxAgeInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieName` <a name="ResetCookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName"></a>

```csharp
private void ResetCookieName()
```

##### `ResetDisableFallback` <a name="ResetDisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```csharp
private void ResetDisableFallback()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetIsHttpOnly` <a name="ResetIsHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly"></a>

```csharp
private void ResetIsHttpOnly()
```

##### `ResetIsSecure` <a name="ResetIsSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure"></a>

```csharp
private void ResetIsSecure()
```

##### `ResetMaxAgeInSeconds` <a name="ResetMaxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds"></a>

```csharp
private void ResetMaxAgeInSeconds()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">DisableFallbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput">IsHttpOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput">IsSecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName">CookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback">DisableFallback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly">IsHttpOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure">IsSecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```csharp
public string CookieNameInput { get; }
```

- *Type:* string

---

##### `DisableFallbackInput`<sup>Optional</sup> <a name="DisableFallbackInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```csharp
public object DisableFallbackInput { get; }
```

- *Type:* object

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IsHttpOnlyInput`<sup>Optional</sup> <a name="IsHttpOnlyInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput"></a>

```csharp
public object IsHttpOnlyInput { get; }
```

- *Type:* object

---

##### `IsSecureInput`<sup>Optional</sup> <a name="IsSecureInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput"></a>

```csharp
public object IsSecureInput { get; }
```

- *Type:* object

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput"></a>

```csharp
public double MaxAgeInSecondsInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```csharp
public string CookieName { get; }
```

- *Type:* string

---

##### `DisableFallback`<sup>Required</sup> <a name="DisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```csharp
public object DisableFallback { get; }
```

- *Type:* object

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `IsHttpOnly`<sup>Required</sup> <a name="IsHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly"></a>

```csharp
public object IsHttpOnly { get; }
```

- *Type:* object

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure"></a>

```csharp
public object IsSecure { get; }
```

- *Type:* object

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds"></a>

```csharp
public double MaxAgeInSeconds { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```csharp
public LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback">ResetDisableFallback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableFallback` <a name="ResetDisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```csharp
private void ResetDisableFallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">DisableFallbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName">CookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback">DisableFallback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```csharp
public string CookieNameInput { get; }
```

- *Type:* string

---

##### `DisableFallbackInput`<sup>Optional</sup> <a name="DisableFallbackInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```csharp
public object DisableFallbackInput { get; }
```

- *Type:* object

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```csharp
public string CookieName { get; }
```

- *Type:* string

---

##### `DisableFallback`<sup>Required</sup> <a name="DisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```csharp
public object DisableFallback { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```csharp
public LoadBalancerBackendsetSessionPersistenceConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSslConfigurationOutputReference <a name="LoadBalancerBackendsetSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetSslConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds">ResetCertificateIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName">ResetCipherSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference">ResetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">ResetTrustedCertificateAuthorityIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth">ResetVerifyDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate">ResetVerifyPeerCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateIds` <a name="ResetCertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds"></a>

```csharp
private void ResetCertificateIds()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName"></a>

```csharp
private void ResetCertificateName()
```

##### `ResetCipherSuiteName` <a name="ResetCipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName"></a>

```csharp
private void ResetCipherSuiteName()
```

##### `ResetProtocols` <a name="ResetProtocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetServerOrderPreference` <a name="ResetServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference"></a>

```csharp
private void ResetServerOrderPreference()
```

##### `ResetTrustedCertificateAuthorityIds` <a name="ResetTrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```csharp
private void ResetTrustedCertificateAuthorityIds()
```

##### `ResetVerifyDepth` <a name="ResetVerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth"></a>

```csharp
private void ResetVerifyDepth()
```

##### `ResetVerifyPeerCertificate` <a name="ResetVerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```csharp
private void ResetVerifyPeerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput">CertificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput">CipherSuiteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput">ServerOrderPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">TrustedCertificateAuthorityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput">VerifyDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput">VerifyPeerCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds">CertificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName">CipherSuiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">TrustedCertificateAuthorityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth">VerifyDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate">VerifyPeerCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateIdsInput`<sup>Optional</sup> <a name="CertificateIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput"></a>

```csharp
public string[] CertificateIdsInput { get; }
```

- *Type:* string[]

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `CipherSuiteNameInput`<sup>Optional</sup> <a name="CipherSuiteNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```csharp
public string CipherSuiteNameInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `ServerOrderPreferenceInput`<sup>Optional</sup> <a name="ServerOrderPreferenceInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```csharp
public string ServerOrderPreferenceInput { get; }
```

- *Type:* string

---

##### `TrustedCertificateAuthorityIdsInput`<sup>Optional</sup> <a name="TrustedCertificateAuthorityIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```csharp
public string[] TrustedCertificateAuthorityIdsInput { get; }
```

- *Type:* string[]

---

##### `VerifyDepthInput`<sup>Optional</sup> <a name="VerifyDepthInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput"></a>

```csharp
public double VerifyDepthInput { get; }
```

- *Type:* double

---

##### `VerifyPeerCertificateInput`<sup>Optional</sup> <a name="VerifyPeerCertificateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```csharp
public object VerifyPeerCertificateInput { get; }
```

- *Type:* object

---

##### `CertificateIds`<sup>Required</sup> <a name="CertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds"></a>

```csharp
public string[] CertificateIds { get; }
```

- *Type:* string[]

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `CipherSuiteName`<sup>Required</sup> <a name="CipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName"></a>

```csharp
public string CipherSuiteName { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `ServerOrderPreference`<sup>Required</sup> <a name="ServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference"></a>

```csharp
public string ServerOrderPreference { get; }
```

- *Type:* string

---

##### `TrustedCertificateAuthorityIds`<sup>Required</sup> <a name="TrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```csharp
public string[] TrustedCertificateAuthorityIds { get; }
```

- *Type:* string[]

---

##### `VerifyDepth`<sup>Required</sup> <a name="VerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth"></a>

```csharp
public double VerifyDepth { get; }
```

- *Type:* double

---

##### `VerifyPeerCertificate`<sup>Required</sup> <a name="VerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```csharp
public object VerifyPeerCertificate { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue"></a>

```csharp
public LoadBalancerBackendsetSslConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---


### LoadBalancerBackendsetTimeoutsOutputReference <a name="LoadBalancerBackendsetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LoadBalancerBackendsetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



