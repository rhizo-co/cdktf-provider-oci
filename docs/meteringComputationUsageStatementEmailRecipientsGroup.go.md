# `meteringComputationUsageStatementEmailRecipientsGroup` Submodule <a name="`meteringComputationUsageStatementEmailRecipientsGroup` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsageStatementEmailRecipientsGroup <a name="MeteringComputationUsageStatementEmailRecipientsGroup" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group oci_metering_computation_usage_statement_email_recipients_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

meteringcomputationusagestatementemailrecipientsgroup.NewMeteringComputationUsageStatementEmailRecipientsGroup(scope Construct, id *string, config MeteringComputationUsageStatementEmailRecipientsGroupConfig) MeteringComputationUsageStatementEmailRecipientsGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig">MeteringComputationUsageStatementEmailRecipientsGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig">MeteringComputationUsageStatementEmailRecipientsGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putRecipientsList">PutRecipientsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetEmailRecipientsGroupId">ResetEmailRecipientsGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecipientsList` <a name="PutRecipientsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putRecipientsList"></a>

```go
func PutRecipientsList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putRecipientsList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putTimeouts"></a>

```go
func PutTimeouts(value MeteringComputationUsageStatementEmailRecipientsGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a>

---

##### `ResetEmailRecipientsGroupId` <a name="ResetEmailRecipientsGroupId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetEmailRecipientsGroupId"></a>

```go
func ResetEmailRecipientsGroupId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationUsageStatementEmailRecipientsGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

meteringcomputationusagestatementemailrecipientsgroup.MeteringComputationUsageStatementEmailRecipientsGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

meteringcomputationusagestatementemailrecipientsgroup.MeteringComputationUsageStatementEmailRecipientsGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

meteringcomputationusagestatementemailrecipientsgroup.MeteringComputationUsageStatementEmailRecipientsGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

meteringcomputationusagestatementemailrecipientsgroup.MeteringComputationUsageStatementEmailRecipientsGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MeteringComputationUsageStatementEmailRecipientsGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MeteringComputationUsageStatementEmailRecipientsGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MeteringComputationUsageStatementEmailRecipientsGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsageStatementEmailRecipientsGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsList">RecipientsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference">MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupIdInput">EmailRecipientsGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsListInput">RecipientsListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupId">EmailRecipientsGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RecipientsList`<sup>Required</sup> <a name="RecipientsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsList"></a>

```go
func RecipientsList() MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList">MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.timeouts"></a>

```go
func Timeouts() MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference">MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `EmailRecipientsGroupIdInput`<sup>Optional</sup> <a name="EmailRecipientsGroupIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupIdInput"></a>

```go
func EmailRecipientsGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RecipientsListInput`<sup>Optional</sup> <a name="RecipientsListInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.recipientsListInput"></a>

```go
func RecipientsListInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `EmailRecipientsGroupId`<sup>Required</sup> <a name="EmailRecipientsGroupId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.emailRecipientsGroupId"></a>

```go
func EmailRecipientsGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageStatementEmailRecipientsGroupConfig <a name="MeteringComputationUsageStatementEmailRecipientsGroupConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

&meteringcomputationusagestatementemailrecipientsgroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	RecipientsList: interface{},
	SubscriptionId: *string,
	EmailRecipientsGroupId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#compartment_id MeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.recipientsList">RecipientsList</a></code> | <code>interface{}</code> | recipients_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#subscription_id MeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.emailRecipientsGroupId">EmailRecipientsGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id MeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#id MeteringComputationUsageStatementEmailRecipientsGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#compartment_id MeteringComputationUsageStatementEmailRecipientsGroup#compartment_id}.

---

##### `RecipientsList`<sup>Required</sup> <a name="RecipientsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.recipientsList"></a>

```go
RecipientsList interface{}
```

- *Type:* interface{}

recipients_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#recipients_list MeteringComputationUsageStatementEmailRecipientsGroup#recipients_list}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#subscription_id MeteringComputationUsageStatementEmailRecipientsGroup#subscription_id}.

---

##### `EmailRecipientsGroupId`<sup>Optional</sup> <a name="EmailRecipientsGroupId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.emailRecipientsGroupId"></a>

```go
EmailRecipientsGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_recipients_group_id MeteringComputationUsageStatementEmailRecipientsGroup#email_recipients_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#id MeteringComputationUsageStatementEmailRecipientsGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupConfig.property.timeouts"></a>

```go
Timeouts MeteringComputationUsageStatementEmailRecipientsGroupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts">MeteringComputationUsageStatementEmailRecipientsGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#timeouts MeteringComputationUsageStatementEmailRecipientsGroup#timeouts}

---

### MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct <a name="MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

&meteringcomputationusagestatementemailrecipientsgroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct {
	EmailId: *string,
	State: *string,
	FirstName: *string,
	LastName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.emailId">EmailId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_id MeteringComputationUsageStatementEmailRecipientsGroup#email_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#state MeteringComputationUsageStatementEmailRecipientsGroup#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#first_name MeteringComputationUsageStatementEmailRecipientsGroup#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#last_name MeteringComputationUsageStatementEmailRecipientsGroup#last_name}. |

---

##### `EmailId`<sup>Required</sup> <a name="EmailId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.emailId"></a>

```go
EmailId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#email_id MeteringComputationUsageStatementEmailRecipientsGroup#email_id}.

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#state MeteringComputationUsageStatementEmailRecipientsGroup#state}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#first_name MeteringComputationUsageStatementEmailRecipientsGroup#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStruct.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#last_name MeteringComputationUsageStatementEmailRecipientsGroup#last_name}.

---

### MeteringComputationUsageStatementEmailRecipientsGroupTimeouts <a name="MeteringComputationUsageStatementEmailRecipientsGroupTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

&meteringcomputationusagestatementemailrecipientsgroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#create MeteringComputationUsageStatementEmailRecipientsGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#delete MeteringComputationUsageStatementEmailRecipientsGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#update MeteringComputationUsageStatementEmailRecipientsGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#create MeteringComputationUsageStatementEmailRecipientsGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#delete MeteringComputationUsageStatementEmailRecipientsGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_statement_email_recipients_group#update MeteringComputationUsageStatementEmailRecipientsGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList <a name="MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

meteringcomputationusagestatementemailrecipientsgroup.NewMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get"></a>

```go
func Get(index *f64) MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference <a name="MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

meteringcomputationusagestatementemailrecipientsgroup.NewMeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.resetLastName"></a>

```go
func ResetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailIdInput">EmailIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailId">EmailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailIdInput`<sup>Optional</sup> <a name="EmailIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailIdInput"></a>

```go
func EmailIdInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `EmailId`<sup>Required</sup> <a name="EmailId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.emailId"></a>

```go
func EmailId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupRecipientsListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference <a name="MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/meteringcomputationusagestatementemailrecipientsgroup"

meteringcomputationusagestatementemailrecipientsgroup.NewMeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageStatementEmailRecipientsGroup.MeteringComputationUsageStatementEmailRecipientsGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



