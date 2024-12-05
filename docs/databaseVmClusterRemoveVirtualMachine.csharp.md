# `databaseVmClusterRemoveVirtualMachine` Submodule <a name="`databaseVmClusterRemoveVirtualMachine` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmClusterRemoveVirtualMachine <a name="DatabaseVmClusterRemoveVirtualMachine" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine oci_database_vm_cluster_remove_virtual_machine}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachine(Construct Scope, string Id, DatabaseVmClusterRemoveVirtualMachineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig">DatabaseVmClusterRemoveVirtualMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig">DatabaseVmClusterRemoveVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers">PutDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDbServers` <a name="PutDbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers"></a>

```csharp
private void PutDbServers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseVmClusterRemoveVirtualMachineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseVmClusterRemoveVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseVmClusterRemoveVirtualMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseVmClusterRemoveVirtualMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseVmClusterRemoveVirtualMachine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseVmClusterRemoveVirtualMachine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseVmClusterRemoveVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseVmClusterRemoveVirtualMachine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseVmClusterRemoveVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmClusterRemoveVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cloudAutomationUpdateDetails">CloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cpusEnabled">CpusEnabled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServers">DbServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList">DatabaseVmClusterRemoveVirtualMachineDbServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fileSystemConfigurationDetails">FileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.giVersion">GiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isLocalBackupEnabled">IsLocalBackupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isSparseDiskgroupEnabled">IsSparseDiskgroupEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lastPatchHistoryEntryId">LastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.memorySizeInGbs">MemorySizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.systemVersion">SystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference">DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterNetworkId">VmClusterNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServersInput">DbServersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CloudAutomationUpdateDetails`<sup>Required</sup> <a name="CloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cloudAutomationUpdateDetails"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList CloudAutomationUpdateDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CpusEnabled`<sup>Required</sup> <a name="CpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cpusEnabled"></a>

```csharp
public double CpusEnabled { get; }
```

- *Type:* double

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataCollectionOptions"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList DataCollectionOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList</a>

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbNodeStorageSizeInGbs"></a>

```csharp
public double DbNodeStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServers"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineDbServersList DbServers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList">DatabaseVmClusterRemoveVirtualMachineDbServersList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `FileSystemConfigurationDetails`<sup>Required</sup> <a name="FileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fileSystemConfigurationDetails"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList FileSystemConfigurationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.giVersion"></a>

```csharp
public string GiVersion { get; }
```

- *Type:* string

---

##### `IsLocalBackupEnabled`<sup>Required</sup> <a name="IsLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isLocalBackupEnabled"></a>

```csharp
public IResolvable IsLocalBackupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSparseDiskgroupEnabled`<sup>Required</sup> <a name="IsSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isSparseDiskgroupEnabled"></a>

```csharp
public IResolvable IsSparseDiskgroupEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LastPatchHistoryEntryId`<sup>Required</sup> <a name="LastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lastPatchHistoryEntryId"></a>

```csharp
public string LastPatchHistoryEntryId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MemorySizeInGbs`<sup>Required</sup> <a name="MemorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.memorySizeInGbs"></a>

```csharp
public double MemorySizeInGbs { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.systemVersion"></a>

```csharp
public string SystemVersion { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeouts"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference">DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VmClusterNetworkId`<sup>Required</sup> <a name="VmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterNetworkId"></a>

```csharp
public string VmClusterNetworkId { get; }
```

- *Type:* string

---

##### `DbServersInput`<sup>Optional</sup> <a name="DbServersInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServersInput"></a>

```csharp
public object DbServersInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterIdInput"></a>

```csharp
public string VmClusterIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails {

};
```


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference {

};
```


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod {

};
```


### DatabaseVmClusterRemoveVirtualMachineConfig <a name="DatabaseVmClusterRemoveVirtualMachineConfig" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object DbServers,
    string VmClusterId,
    string Id = null,
    DatabaseVmClusterRemoveVirtualMachineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dbServers">DbServers</a></code> | <code>object</code> | db_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dbServers"></a>

```csharp
public object DbServers { get; set; }
```

- *Type:* object

db_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_servers DatabaseVmClusterRemoveVirtualMachine#db_servers}

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.timeouts"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#timeouts DatabaseVmClusterRemoveVirtualMachine#timeouts}

---

### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions {

};
```


### DatabaseVmClusterRemoveVirtualMachineDbServers <a name="DatabaseVmClusterRemoveVirtualMachineDbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineDbServers {
    string DbServerId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.property.dbServerId">DbServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_server_id DatabaseVmClusterRemoveVirtualMachine#db_server_id}. |

---

##### `DbServerId`<sup>Required</sup> <a name="DbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.property.dbServerId"></a>

```csharp
public string DbServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_server_id DatabaseVmClusterRemoveVirtualMachine#db_server_id}.

---

### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails {

};
```


### DatabaseVmClusterRemoveVirtualMachineTimeouts <a name="DatabaseVmClusterRemoveVirtualMachineTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#create DatabaseVmClusterRemoveVirtualMachine#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#delete DatabaseVmClusterRemoveVirtualMachine#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#update DatabaseVmClusterRemoveVirtualMachine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#create DatabaseVmClusterRemoveVirtualMachine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#delete DatabaseVmClusterRemoveVirtualMachine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#update DatabaseVmClusterRemoveVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get"></a>

```csharp
private DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">ApplyUpdatePreferredEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">ApplyUpdatePreferredStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyUpdatePreferredEndTime`<sup>Required</sup> <a name="ApplyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```csharp
public string ApplyUpdatePreferredEndTime { get; }
```

- *Type:* string

---

##### `ApplyUpdatePreferredStartTime`<sup>Required</sup> <a name="ApplyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```csharp
public string ApplyUpdatePreferredStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get"></a>

```csharp
private DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">FreezePeriodEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">FreezePeriodStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FreezePeriodEndTime`<sup>Required</sup> <a name="FreezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```csharp
public string FreezePeriodEndTime { get; }
```

- *Type:* string

---

##### `FreezePeriodStartTime`<sup>Required</sup> <a name="FreezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```csharp
public string FreezePeriodStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get"></a>

```csharp
private DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">ApplyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">FreezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">IsEarlyAdoptionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">IsFreezePeriodEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyUpdateTimePreference`<sup>Required</sup> <a name="ApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList ApplyUpdateTimePreference { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a>

---

##### `FreezePeriod`<sup>Required</sup> <a name="FreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList FreezePeriod { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList</a>

---

##### `IsEarlyAdoptionEnabled`<sup>Required</sup> <a name="IsEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```csharp
public IResolvable IsEarlyAdoptionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsFreezePeriodEnabled`<sup>Required</sup> <a name="IsFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```csharp
public IResolvable IsFreezePeriodEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails</a>

---


### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get"></a>

```csharp
private DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public IResolvable IsDiagnosticsEventsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```csharp
public IResolvable IsHealthMonitoringEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public IResolvable IsIncidentLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions</a>

---


### DatabaseVmClusterRemoveVirtualMachineDbServersList <a name="DatabaseVmClusterRemoveVirtualMachineDbServersList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineDbServersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get"></a>

```csharp
private DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerIdInput">DbServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerId">DbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbServerIdInput`<sup>Optional</sup> <a name="DbServerIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerIdInput"></a>

```csharp
public string DbServerIdInput { get; }
```

- *Type:* string

---

##### `DbServerId`<sup>Required</sup> <a name="DbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerId"></a>

```csharp
public string DbServerId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get"></a>

```csharp
private DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">FileSystemSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemSizeGb`<sup>Required</sup> <a name="FileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```csharp
public double FileSystemSizeGb { get; }
```

- *Type:* double

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```csharp
public DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails</a>

---


### DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



