# `stackMonitoringMonitoredResourcesAssociateMonitoredResource` Submodule <a name="`stackMonitoringMonitoredResourcesAssociateMonitoredResource` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResource <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource oci_stack_monitoring_monitored_resources_associate_monitored_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.NewStackMonitoringMonitoredResourcesAssociateMonitoredResource(scope Construct, id *string, config StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig) StackMonitoringMonitoredResourcesAssociateMonitoredResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig">StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig">StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts"></a>

```go
func PutTimeouts(value StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesAssociateMonitoredResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.StackMonitoringMonitoredResourcesAssociateMonitoredResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.StackMonitoringMonitoredResourcesAssociateMonitoredResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.StackMonitoringMonitoredResourcesAssociateMonitoredResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.StackMonitoringMonitoredResourcesAssociateMonitoredResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesAssociateMonitoredResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StackMonitoringMonitoredResourcesAssociateMonitoredResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StackMonitoringMonitoredResourcesAssociateMonitoredResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesAssociateMonitoredResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceDetails">DestinationResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceDetails">SourceResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationTypeInput">AssociationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceIdInput">DestinationResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationType">AssociationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceId">DestinationResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `DestinationResourceDetails`<sup>Required</sup> <a name="DestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceDetails"></a>

```go
func DestinationResourceDetails() StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList</a>

---

##### `SourceResourceDetails`<sup>Required</sup> <a name="SourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceDetails"></a>

```go
func SourceResourceDetails() StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList</a>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeouts"></a>

```go
func Timeouts() StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference</a>

---

##### `AssociationTypeInput`<sup>Optional</sup> <a name="AssociationTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationTypeInput"></a>

```go
func AssociationTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DestinationResourceIdInput`<sup>Optional</sup> <a name="DestinationResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceIdInput"></a>

```go
func DestinationResourceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceIdInput"></a>

```go
func SourceResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationType"></a>

```go
func AssociationType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DestinationResourceId`<sup>Required</sup> <a name="DestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceId"></a>

```go
func DestinationResourceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

&stackmonitoringmonitoredresourcesassociatemonitoredresource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssociationType: *string,
	CompartmentId: *string,
	DestinationResourceId: *string,
	SourceResourceId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.associationType">AssociationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.destinationResourceId">DestinationResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.associationType"></a>

```go
AssociationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}.

---

##### `DestinationResourceId`<sup>Required</sup> <a name="DestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.destinationResourceId"></a>

```go
DestinationResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}.

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.sourceResourceId"></a>

```go
SourceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.timeouts"></a>

```go
Timeouts StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#timeouts StackMonitoringMonitoredResourcesAssociateMonitoredResource#timeouts}

---

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

&stackmonitoringmonitoredresourcesassociatemonitoredresource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails {

}
```


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

&stackmonitoringmonitoredresourcesassociatemonitoredresource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails {

}
```


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

&stackmonitoringmonitoredresourcesassociatemonitoredresource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.NewStackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get"></a>

```go
func Get(index *f64) StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.NewStackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails</a>

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.NewStackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get"></a>

```go
func Get(index *f64) StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.NewStackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails</a>

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcesassociatemonitoredresource"

stackmonitoringmonitoredresourcesassociatemonitoredresource.NewStackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



