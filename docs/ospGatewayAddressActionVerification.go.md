# `ospGatewayAddressActionVerification` Submodule <a name="`ospGatewayAddressActionVerification` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewayAddressActionVerification <a name="OspGatewayAddressActionVerification" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification oci_osp_gateway_address_action_verification}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

ospgatewayaddressactionverification.NewOspGatewayAddressActionVerification(scope Construct, id *string, config OspGatewayAddressActionVerificationConfig) OspGatewayAddressActionVerification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig">OspGatewayAddressActionVerificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig">OspGatewayAddressActionVerificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey">ResetAddressKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName">ResetCompanyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass">ResetContributorClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName">ResetDepartmentName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber">ResetInternalNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle">ResetJobTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1">ResetLine1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2">ResetLine2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3">ResetLine3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4">ResetLine4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription">ResetMunicipalInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode">ResetPhoneCountryCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription">ResetStateInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName">ResetStreetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber">ResetStreetNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts"></a>

```go
func PutTimeouts(value OspGatewayAddressActionVerificationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

---

##### `ResetAddressKey` <a name="ResetAddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey"></a>

```go
func ResetAddressKey()
```

##### `ResetCity` <a name="ResetCity" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity"></a>

```go
func ResetCity()
```

##### `ResetCompanyName` <a name="ResetCompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName"></a>

```go
func ResetCompanyName()
```

##### `ResetContributorClass` <a name="ResetContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass"></a>

```go
func ResetContributorClass()
```

##### `ResetCountry` <a name="ResetCountry" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty"></a>

```go
func ResetCounty()
```

##### `ResetDepartmentName` <a name="ResetDepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName"></a>

```go
func ResetDepartmentName()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId"></a>

```go
func ResetId()
```

##### `ResetInternalNumber` <a name="ResetInternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber"></a>

```go
func ResetInternalNumber()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle"></a>

```go
func ResetJobTitle()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetLine1` <a name="ResetLine1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1"></a>

```go
func ResetLine1()
```

##### `ResetLine2` <a name="ResetLine2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2"></a>

```go
func ResetLine2()
```

##### `ResetLine3` <a name="ResetLine3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3"></a>

```go
func ResetLine3()
```

##### `ResetLine4` <a name="ResetLine4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4"></a>

```go
func ResetLine4()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName"></a>

```go
func ResetMiddleName()
```

##### `ResetMunicipalInscription` <a name="ResetMunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription"></a>

```go
func ResetMunicipalInscription()
```

##### `ResetPhoneCountryCode` <a name="ResetPhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode"></a>

```go
func ResetPhoneCountryCode()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince"></a>

```go
func ResetProvince()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState"></a>

```go
func ResetState()
```

##### `ResetStateInscription` <a name="ResetStateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription"></a>

```go
func ResetStateInscription()
```

##### `ResetStreetName` <a name="ResetStreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName"></a>

```go
func ResetStreetName()
```

##### `ResetStreetNumber` <a name="ResetStreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber"></a>

```go
func ResetStreetNumber()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

ospgatewayaddressactionverification.OspGatewayAddressActionVerification_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

ospgatewayaddressactionverification.OspGatewayAddressActionVerification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

ospgatewayaddressactionverification.OspGatewayAddressActionVerification_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

ospgatewayaddressactionverification.OspGatewayAddressActionVerification_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OspGatewayAddressActionVerification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OspGatewayAddressActionVerification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewayAddressActionVerification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address">Address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality">Quality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode">VerificationCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput">AddressKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput">ContributorClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput">CountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput">DepartmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput">InternalNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput">JobTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input">Line1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input">Line2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input">Line3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input">Line4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput">MiddleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput">MunicipalInscriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput">PhoneCountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput">ProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput">StateInscriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput">StreetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput">StreetNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey">AddressKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName">DepartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1">Line1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2">Line2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3">Line3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4">Line4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription">StateInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName">StreetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address"></a>

```go
func Address() OspGatewayAddressActionVerificationAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a>

---

##### `Quality`<sup>Required</sup> <a name="Quality" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality"></a>

```go
func Quality() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts"></a>

```go
func Timeouts() OspGatewayAddressActionVerificationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a>

---

##### `VerificationCode`<sup>Required</sup> <a name="VerificationCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode"></a>

```go
func VerificationCode() *string
```

- *Type:* *string

---

##### `AddressKeyInput`<sup>Optional</sup> <a name="AddressKeyInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput"></a>

```go
func AddressKeyInput() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ContributorClassInput`<sup>Optional</sup> <a name="ContributorClassInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput"></a>

```go
func ContributorClassInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput"></a>

```go
func CountyInput() *string
```

- *Type:* *string

---

##### `DepartmentNameInput`<sup>Optional</sup> <a name="DepartmentNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput"></a>

```go
func DepartmentNameInput() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternalNumberInput`<sup>Optional</sup> <a name="InternalNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput"></a>

```go
func InternalNumberInput() *string
```

- *Type:* *string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput"></a>

```go
func JobTitleInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `Line1Input`<sup>Optional</sup> <a name="Line1Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input"></a>

```go
func Line1Input() *string
```

- *Type:* *string

---

##### `Line2Input`<sup>Optional</sup> <a name="Line2Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input"></a>

```go
func Line2Input() *string
```

- *Type:* *string

---

##### `Line3Input`<sup>Optional</sup> <a name="Line3Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input"></a>

```go
func Line3Input() *string
```

- *Type:* *string

---

##### `Line4Input`<sup>Optional</sup> <a name="Line4Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input"></a>

```go
func Line4Input() *string
```

- *Type:* *string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput"></a>

```go
func MiddleNameInput() *string
```

- *Type:* *string

---

##### `MunicipalInscriptionInput`<sup>Optional</sup> <a name="MunicipalInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput"></a>

```go
func MunicipalInscriptionInput() *string
```

- *Type:* *string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput"></a>

```go
func OspHomeRegionInput() *string
```

- *Type:* *string

---

##### `PhoneCountryCodeInput`<sup>Optional</sup> <a name="PhoneCountryCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput"></a>

```go
func PhoneCountryCodeInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput"></a>

```go
func ProvinceInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StateInscriptionInput`<sup>Optional</sup> <a name="StateInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput"></a>

```go
func StateInscriptionInput() *string
```

- *Type:* *string

---

##### `StreetNameInput`<sup>Optional</sup> <a name="StreetNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput"></a>

```go
func StreetNameInput() *string
```

- *Type:* *string

---

##### `StreetNumberInput`<sup>Optional</sup> <a name="StreetNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput"></a>

```go
func StreetNumberInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey"></a>

```go
func AddressKey() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass"></a>

```go
func ContributorClass() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName"></a>

```go
func DepartmentName() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber"></a>

```go
func InternalNumber() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1"></a>

```go
func Line1() *string
```

- *Type:* *string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2"></a>

```go
func Line2() *string
```

- *Type:* *string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3"></a>

```go
func Line3() *string
```

- *Type:* *string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4"></a>

```go
func Line4() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription"></a>

```go
func MunicipalInscription() *string
```

- *Type:* *string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion"></a>

```go
func OspHomeRegion() *string
```

- *Type:* *string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode"></a>

```go
func PhoneCountryCode() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription"></a>

```go
func StateInscription() *string
```

- *Type:* *string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName"></a>

```go
func StreetName() *string
```

- *Type:* *string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber"></a>

```go
func StreetNumber() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewayAddressActionVerificationAddress <a name="OspGatewayAddressActionVerificationAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

&ospgatewayaddressactionverification.OspGatewayAddressActionVerificationAddress {

}
```


### OspGatewayAddressActionVerificationConfig <a name="OspGatewayAddressActionVerificationConfig" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

&ospgatewayaddressactionverification.OspGatewayAddressActionVerificationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	OspHomeRegion: *string,
	AddressKey: *string,
	City: *string,
	CompanyName: *string,
	ContributorClass: *string,
	Country: *string,
	County: *string,
	DepartmentName: *string,
	EmailAddress: *string,
	FirstName: *string,
	Id: *string,
	InternalNumber: *string,
	JobTitle: *string,
	LastName: *string,
	Line1: *string,
	Line2: *string,
	Line3: *string,
	Line4: *string,
	MiddleName: *string,
	MunicipalInscription: *string,
	PhoneCountryCode: *string,
	PhoneNumber: *string,
	PostalCode: *string,
	Province: *string,
	State: *string,
	StateInscription: *string,
	StreetName: *string,
	StreetNumber: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey">AddressKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName">CompanyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county">County</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName">DepartmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle">JobTitle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1">Line1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2">Line2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3">Line3</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4">Line4</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName">MiddleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode">PostalCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province">Province</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription">StateInscription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName">StreetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion"></a>

```go
OspHomeRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}.

---

##### `AddressKey`<sup>Optional</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey"></a>

```go
AddressKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}.

---

##### `City`<sup>Optional</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}.

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}.

---

##### `ContributorClass`<sup>Optional</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass"></a>

```go
ContributorClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county"></a>

```go
County *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}.

---

##### `DepartmentName`<sup>Optional</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName"></a>

```go
DepartmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalNumber`<sup>Optional</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber"></a>

```go
InternalNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}.

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle"></a>

```go
JobTitle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}.

---

##### `Line1`<sup>Optional</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1"></a>

```go
Line1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}.

---

##### `Line2`<sup>Optional</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2"></a>

```go
Line2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}.

---

##### `Line3`<sup>Optional</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3"></a>

```go
Line3 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}.

---

##### `Line4`<sup>Optional</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4"></a>

```go
Line4 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}.

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName"></a>

```go
MiddleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}.

---

##### `MunicipalInscription`<sup>Optional</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription"></a>

```go
MunicipalInscription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}.

---

##### `PhoneCountryCode`<sup>Optional</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode"></a>

```go
PhoneCountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province"></a>

```go
Province *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}.

---

##### `StateInscription`<sup>Optional</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription"></a>

```go
StateInscription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}.

---

##### `StreetName`<sup>Optional</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName"></a>

```go
StreetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}.

---

##### `StreetNumber`<sup>Optional</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber"></a>

```go
StreetNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts"></a>

```go
Timeouts OspGatewayAddressActionVerificationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#timeouts OspGatewayAddressActionVerification#timeouts}

---

### OspGatewayAddressActionVerificationTimeouts <a name="OspGatewayAddressActionVerificationTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

&ospgatewayaddressactionverification.OspGatewayAddressActionVerificationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewayAddressActionVerificationAddressList <a name="OspGatewayAddressActionVerificationAddressList" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

ospgatewayaddressactionverification.NewOspGatewayAddressActionVerificationAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OspGatewayAddressActionVerificationAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get"></a>

```go
func Get(index *f64) OspGatewayAddressActionVerificationAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OspGatewayAddressActionVerificationAddressOutputReference <a name="OspGatewayAddressActionVerificationAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

ospgatewayaddressactionverification.NewOspGatewayAddressActionVerificationAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OspGatewayAddressActionVerificationAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1">Line1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2">Line2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3">Line3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4">Line4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName">StreetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey"></a>

```go
func AddressKey() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass"></a>

```go
func ContributorClass() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName"></a>

```go
func DepartmentName() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber"></a>

```go
func InternalNumber() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1"></a>

```go
func Line1() *string
```

- *Type:* *string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2"></a>

```go
func Line2() *string
```

- *Type:* *string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3"></a>

```go
func Line3() *string
```

- *Type:* *string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4"></a>

```go
func Line4() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription"></a>

```go
func MunicipalInscription() *string
```

- *Type:* *string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode"></a>

```go
func PhoneCountryCode() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription"></a>

```go
func StateInscription() *string
```

- *Type:* *string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName"></a>

```go
func StreetName() *string
```

- *Type:* *string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber"></a>

```go
func StreetNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() OspGatewayAddressActionVerificationAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a>

---


### OspGatewayAddressActionVerificationTimeoutsOutputReference <a name="OspGatewayAddressActionVerificationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ospgatewayaddressactionverification"

ospgatewayaddressactionverification.NewOspGatewayAddressActionVerificationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OspGatewayAddressActionVerificationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



