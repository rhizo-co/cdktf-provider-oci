# `stackMonitoringMonitoredResourcesSearchAssociation` Submodule <a name="`stackMonitoringMonitoredResourcesSearchAssociation` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesSearchAssociation <a name="StackMonitoringMonitoredResourcesSearchAssociation" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association oci_stack_monitoring_monitored_resources_search_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.NewStackMonitoringMonitoredResourcesSearchAssociation(scope Construct, id *string, config StackMonitoringMonitoredResourcesSearchAssociationConfig) StackMonitoringMonitoredResourcesSearchAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig">StackMonitoringMonitoredResourcesSearchAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig">StackMonitoringMonitoredResourcesSearchAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetAssociationType">ResetAssociationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceId">ResetDestinationResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceName">ResetDestinationResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceType">ResetDestinationResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceId">ResetSourceResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceName">ResetSourceResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceType">ResetSourceResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.putTimeouts"></a>

```go
func PutTimeouts(value StackMonitoringMonitoredResourcesSearchAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a>

---

##### `ResetAssociationType` <a name="ResetAssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetAssociationType"></a>

```go
func ResetAssociationType()
```

##### `ResetDestinationResourceId` <a name="ResetDestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceId"></a>

```go
func ResetDestinationResourceId()
```

##### `ResetDestinationResourceName` <a name="ResetDestinationResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceName"></a>

```go
func ResetDestinationResourceName()
```

##### `ResetDestinationResourceType` <a name="ResetDestinationResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetDestinationResourceType"></a>

```go
func ResetDestinationResourceType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetSourceResourceId` <a name="ResetSourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceId"></a>

```go
func ResetSourceResourceId()
```

##### `ResetSourceResourceName` <a name="ResetSourceResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceName"></a>

```go
func ResetSourceResourceName()
```

##### `ResetSourceResourceType` <a name="ResetSourceResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetSourceResourceType"></a>

```go
func ResetSourceResourceType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearchAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearchAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StackMonitoringMonitoredResourcesSearchAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StackMonitoringMonitoredResourcesSearchAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesSearchAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList">StackMonitoringMonitoredResourcesSearchAssociationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.associationTypeInput">AssociationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceIdInput">DestinationResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceNameInput">DestinationResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceTypeInput">DestinationResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceNameInput">SourceResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceTypeInput">SourceResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.associationType">AssociationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceId">DestinationResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceName">DestinationResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceType">DestinationResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceName">SourceResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceType">SourceResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.items"></a>

```go
func Items() StackMonitoringMonitoredResourcesSearchAssociationItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList">StackMonitoringMonitoredResourcesSearchAssociationItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.timeouts"></a>

```go
func Timeouts() StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference</a>

---

##### `AssociationTypeInput`<sup>Optional</sup> <a name="AssociationTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.associationTypeInput"></a>

```go
func AssociationTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DestinationResourceIdInput`<sup>Optional</sup> <a name="DestinationResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceIdInput"></a>

```go
func DestinationResourceIdInput() *string
```

- *Type:* *string

---

##### `DestinationResourceNameInput`<sup>Optional</sup> <a name="DestinationResourceNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceNameInput"></a>

```go
func DestinationResourceNameInput() *string
```

- *Type:* *string

---

##### `DestinationResourceTypeInput`<sup>Optional</sup> <a name="DestinationResourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceTypeInput"></a>

```go
func DestinationResourceTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceIdInput"></a>

```go
func SourceResourceIdInput() *string
```

- *Type:* *string

---

##### `SourceResourceNameInput`<sup>Optional</sup> <a name="SourceResourceNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceNameInput"></a>

```go
func SourceResourceNameInput() *string
```

- *Type:* *string

---

##### `SourceResourceTypeInput`<sup>Optional</sup> <a name="SourceResourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceTypeInput"></a>

```go
func SourceResourceTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.associationType"></a>

```go
func AssociationType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DestinationResourceId`<sup>Required</sup> <a name="DestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceId"></a>

```go
func DestinationResourceId() *string
```

- *Type:* *string

---

##### `DestinationResourceName`<sup>Required</sup> <a name="DestinationResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceName"></a>

```go
func DestinationResourceName() *string
```

- *Type:* *string

---

##### `DestinationResourceType`<sup>Required</sup> <a name="DestinationResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.destinationResourceType"></a>

```go
func DestinationResourceType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

##### `SourceResourceName`<sup>Required</sup> <a name="SourceResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceName"></a>

```go
func SourceResourceName() *string
```

- *Type:* *string

---

##### `SourceResourceType`<sup>Required</sup> <a name="SourceResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.sourceResourceType"></a>

```go
func SourceResourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesSearchAssociationConfig <a name="StackMonitoringMonitoredResourcesSearchAssociationConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

&stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AssociationType: *string,
	DestinationResourceId: *string,
	DestinationResourceName: *string,
	DestinationResourceType: *string,
	Id: *string,
	SourceResourceId: *string,
	SourceResourceName: *string,
	SourceResourceType: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#compartment_id StackMonitoringMonitoredResourcesSearchAssociation#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.associationType">AssociationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#association_type StackMonitoringMonitoredResourcesSearchAssociation#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceId">DestinationResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_id StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceName">DestinationResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_name StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceType">DestinationResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_type StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#id StackMonitoringMonitoredResourcesSearchAssociation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_id StackMonitoringMonitoredResourcesSearchAssociation#source_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceName">SourceResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_name StackMonitoringMonitoredResourcesSearchAssociation#source_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceType">SourceResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_type StackMonitoringMonitoredResourcesSearchAssociation#source_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#compartment_id StackMonitoringMonitoredResourcesSearchAssociation#compartment_id}.

---

##### `AssociationType`<sup>Optional</sup> <a name="AssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.associationType"></a>

```go
AssociationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#association_type StackMonitoringMonitoredResourcesSearchAssociation#association_type}.

---

##### `DestinationResourceId`<sup>Optional</sup> <a name="DestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceId"></a>

```go
DestinationResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_id StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_id}.

---

##### `DestinationResourceName`<sup>Optional</sup> <a name="DestinationResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceName"></a>

```go
DestinationResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_name StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_name}.

---

##### `DestinationResourceType`<sup>Optional</sup> <a name="DestinationResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.destinationResourceType"></a>

```go
DestinationResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#destination_resource_type StackMonitoringMonitoredResourcesSearchAssociation#destination_resource_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#id StackMonitoringMonitoredResourcesSearchAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceResourceId`<sup>Optional</sup> <a name="SourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceId"></a>

```go
SourceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_id StackMonitoringMonitoredResourcesSearchAssociation#source_resource_id}.

---

##### `SourceResourceName`<sup>Optional</sup> <a name="SourceResourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceName"></a>

```go
SourceResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_name StackMonitoringMonitoredResourcesSearchAssociation#source_resource_name}.

---

##### `SourceResourceType`<sup>Optional</sup> <a name="SourceResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.sourceResourceType"></a>

```go
SourceResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#source_resource_type StackMonitoringMonitoredResourcesSearchAssociation#source_resource_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationConfig.property.timeouts"></a>

```go
Timeouts StackMonitoringMonitoredResourcesSearchAssociationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts">StackMonitoringMonitoredResourcesSearchAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#timeouts StackMonitoringMonitoredResourcesSearchAssociation#timeouts}

---

### StackMonitoringMonitoredResourcesSearchAssociationItems <a name="StackMonitoringMonitoredResourcesSearchAssociationItems" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

&stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociationItems {

}
```


### StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

&stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails {

}
```


### StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

&stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails {

}
```


### StackMonitoringMonitoredResourcesSearchAssociationTimeouts <a name="StackMonitoringMonitoredResourcesSearchAssociationTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

&stackmonitoringmonitoredresourcessearchassociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#create StackMonitoringMonitoredResourcesSearchAssociation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#delete StackMonitoringMonitoredResourcesSearchAssociation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#update StackMonitoringMonitoredResourcesSearchAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#create StackMonitoringMonitoredResourcesSearchAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#delete StackMonitoringMonitoredResourcesSearchAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search_association#update StackMonitoringMonitoredResourcesSearchAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.NewStackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.get"></a>

```go
func Get(index *f64) StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.NewStackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails">StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails">StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetails</a>

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsList <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.NewStackMonitoringMonitoredResourcesSearchAssociationItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StackMonitoringMonitoredResourcesSearchAssociationItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.get"></a>

```go
func Get(index *f64) StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.NewStackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.associationType">AssociationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.destinationResourceDetails">DestinationResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList">StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.destinationResourceId">DestinationResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.sourceResourceDetails">SourceResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList">StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems">StackMonitoringMonitoredResourcesSearchAssociationItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.associationType"></a>

```go
func AssociationType() *string
```

- *Type:* *string

---

##### `DestinationResourceDetails`<sup>Required</sup> <a name="DestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.destinationResourceDetails"></a>

```go
func DestinationResourceDetails() StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList">StackMonitoringMonitoredResourcesSearchAssociationItemsDestinationResourceDetailsList</a>

---

##### `DestinationResourceId`<sup>Required</sup> <a name="DestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.destinationResourceId"></a>

```go
func DestinationResourceId() *string
```

- *Type:* *string

---

##### `SourceResourceDetails`<sup>Required</sup> <a name="SourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.sourceResourceDetails"></a>

```go
func SourceResourceDetails() StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList">StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList</a>

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() StackMonitoringMonitoredResourcesSearchAssociationItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItems">StackMonitoringMonitoredResourcesSearchAssociationItems</a>

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.NewStackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.get"></a>

```go
func Get(index *f64) StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.NewStackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails">StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails">StackMonitoringMonitoredResourcesSearchAssociationItemsSourceResourceDetails</a>

---


### StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmonitoredresourcessearchassociation"

stackmonitoringmonitoredresourcessearchassociation.NewStackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearchAssociation.StackMonitoringMonitoredResourcesSearchAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



