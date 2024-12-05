# `announcementsServiceAnnouncementSubscription` Submodule <a name="`announcementsServiceAnnouncementSubscription` Submodule" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AnnouncementsServiceAnnouncementSubscription <a name="AnnouncementsServiceAnnouncementSubscription" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription oci_announcements_service_announcement_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.NewAnnouncementsServiceAnnouncementSubscription(scope Construct, id *string, config AnnouncementsServiceAnnouncementSubscriptionConfig) AnnouncementsServiceAnnouncementSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig">AnnouncementsServiceAnnouncementSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig">AnnouncementsServiceAnnouncementSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups">PutFilterGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFilterGroups">ResetFilterGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredLanguage">ResetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredTimeZone">ResetPreferredTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilterGroups` <a name="PutFilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups"></a>

```go
func PutFilterGroups(value AnnouncementsServiceAnnouncementSubscriptionFilterGroups)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putFilterGroups.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts"></a>

```go
func PutTimeouts(value AnnouncementsServiceAnnouncementSubscriptionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilterGroups` <a name="ResetFilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFilterGroups"></a>

```go
func ResetFilterGroups()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredLanguage"></a>

```go
func ResetPreferredLanguage()
```

##### `ResetPreferredTimeZone` <a name="ResetPreferredTimeZone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetPreferredTimeZone"></a>

```go
func ResetPreferredTimeZone()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.AnnouncementsServiceAnnouncementSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.AnnouncementsServiceAnnouncementSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.AnnouncementsServiceAnnouncementSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.AnnouncementsServiceAnnouncementSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AnnouncementsServiceAnnouncementSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AnnouncementsServiceAnnouncementSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AnnouncementsServiceAnnouncementSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AnnouncementsServiceAnnouncementSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroups">FilterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroupsInput">FilterGroupsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicIdInput">OnsTopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZoneInput">PreferredTimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicId">OnsTopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone">PreferredTimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FilterGroups`<sup>Required</sup> <a name="FilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroups"></a>

```go
func FilterGroups() AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeouts"></a>

```go
func Timeouts() AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference">AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterGroupsInput`<sup>Optional</sup> <a name="FilterGroupsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.filterGroupsInput"></a>

```go
func FilterGroupsInput() AnnouncementsServiceAnnouncementSubscriptionFilterGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnsTopicIdInput`<sup>Optional</sup> <a name="OnsTopicIdInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicIdInput"></a>

```go
func OnsTopicIdInput() *string
```

- *Type:* *string

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguageInput"></a>

```go
func PreferredLanguageInput() *string
```

- *Type:* *string

---

##### `PreferredTimeZoneInput`<sup>Optional</sup> <a name="PreferredTimeZoneInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZoneInput"></a>

```go
func PreferredTimeZoneInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OnsTopicId`<sup>Required</sup> <a name="OnsTopicId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.onsTopicId"></a>

```go
func OnsTopicId() *string
```

- *Type:* *string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `PreferredTimeZone`<sup>Required</sup> <a name="PreferredTimeZone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.preferredTimeZone"></a>

```go
func PreferredTimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AnnouncementsServiceAnnouncementSubscriptionConfig <a name="AnnouncementsServiceAnnouncementSubscriptionConfig" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

&announcementsserviceannouncementsubscription.AnnouncementsServiceAnnouncementSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	OnsTopicId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FilterGroups: github.com/rhizo-co/cdktf-provider-oci-go/oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups,
	FreeformTags: *map[string]*string,
	Id: *string,
	PreferredLanguage: *string,
	PreferredTimeZone: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.onsTopicId">OnsTopicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.filterGroups">FilterGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | filter_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredTimeZone">PreferredTimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#compartment_id AnnouncementsServiceAnnouncementSubscription#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#display_name AnnouncementsServiceAnnouncementSubscription#display_name}.

---

##### `OnsTopicId`<sup>Required</sup> <a name="OnsTopicId" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.onsTopicId"></a>

```go
OnsTopicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#ons_topic_id AnnouncementsServiceAnnouncementSubscription#ons_topic_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#defined_tags AnnouncementsServiceAnnouncementSubscription#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#description AnnouncementsServiceAnnouncementSubscription#description}.

---

##### `FilterGroups`<sup>Optional</sup> <a name="FilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.filterGroups"></a>

```go
FilterGroups AnnouncementsServiceAnnouncementSubscriptionFilterGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

filter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#filter_groups AnnouncementsServiceAnnouncementSubscription#filter_groups}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#freeform_tags AnnouncementsServiceAnnouncementSubscription#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#id AnnouncementsServiceAnnouncementSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredLanguage"></a>

```go
PreferredLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_language AnnouncementsServiceAnnouncementSubscription#preferred_language}.

---

##### `PreferredTimeZone`<sup>Optional</sup> <a name="PreferredTimeZone" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.preferredTimeZone"></a>

```go
PreferredTimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#preferred_time_zone AnnouncementsServiceAnnouncementSubscription#preferred_time_zone}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionConfig.property.timeouts"></a>

```go
Timeouts AnnouncementsServiceAnnouncementSubscriptionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts">AnnouncementsServiceAnnouncementSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#timeouts AnnouncementsServiceAnnouncementSubscription#timeouts}

---

### AnnouncementsServiceAnnouncementSubscriptionFilterGroups <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroups" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

&announcementsserviceannouncementsubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups {
	Filters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.property.filters">Filters</a></code> | <code>interface{}</code> | filters block. |

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#filters AnnouncementsServiceAnnouncementSubscription#filters}

---

### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

&announcementsserviceannouncementsubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters {
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#type AnnouncementsServiceAnnouncementSubscription#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#value AnnouncementsServiceAnnouncementSubscription#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#type AnnouncementsServiceAnnouncementSubscription#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFilters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#value AnnouncementsServiceAnnouncementSubscription#value}.

---

### AnnouncementsServiceAnnouncementSubscriptionTimeouts <a name="AnnouncementsServiceAnnouncementSubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

&announcementsserviceannouncementsubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#create AnnouncementsServiceAnnouncementSubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#delete AnnouncementsServiceAnnouncementSubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#update AnnouncementsServiceAnnouncementSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#create AnnouncementsServiceAnnouncementSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#delete AnnouncementsServiceAnnouncementSubscription#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/announcements_service_announcement_subscription#update AnnouncementsServiceAnnouncementSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.NewAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get"></a>

```go
func Get(index *f64) AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.NewAnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.NewAnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters">PutFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.putFilters.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filters"></a>

```go
func Filters() AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList">AnnouncementsServiceAnnouncementSubscriptionFilterGroupsFiltersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() AnnouncementsServiceAnnouncementSubscriptionFilterGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionFilterGroups">AnnouncementsServiceAnnouncementSubscriptionFilterGroups</a>

---


### AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference <a name="AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/announcementsserviceannouncementsubscription"

announcementsserviceannouncementsubscription.NewAnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.announcementsServiceAnnouncementSubscription.AnnouncementsServiceAnnouncementSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



