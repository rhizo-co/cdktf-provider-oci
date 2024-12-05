# `fusionAppsFusionEnvironment` Submodule <a name="`fusionAppsFusionEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironment <a name="FusionAppsFusionEnvironment" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment oci_fusion_apps_fusion_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironment(scope Construct, id *string, config FusionAppsFusionEnvironmentConfig) FusionAppsFusionEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig">FusionAppsFusionEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig">FusionAppsFusionEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putCreateFusionEnvironmentAdminUserDetails">PutCreateFusionEnvironmentAdminUserDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetAdditionalLanguagePacks">ResetAdditionalLanguagePacks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetDnsPrefix">ResetDnsPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreateFusionEnvironmentAdminUserDetails` <a name="PutCreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putCreateFusionEnvironmentAdminUserDetails"></a>

```go
func PutCreateFusionEnvironmentAdminUserDetails(value FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putCreateFusionEnvironmentAdminUserDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putMaintenancePolicy"></a>

```go
func PutMaintenancePolicy(value FusionAppsFusionEnvironmentMaintenancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy">FusionAppsFusionEnvironmentMaintenancePolicy</a>

---

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value FusionAppsFusionEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts">FusionAppsFusionEnvironmentTimeouts</a>

---

##### `ResetAdditionalLanguagePacks` <a name="ResetAdditionalLanguagePacks" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetAdditionalLanguagePacks"></a>

```go
func ResetAdditionalLanguagePacks()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDnsPrefix` <a name="ResetDnsPrefix" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetDnsPrefix"></a>

```go
func ResetDnsPrefix()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.FusionAppsFusionEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.FusionAppsFusionEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.FusionAppsFusionEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.FusionAppsFusionEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FusionAppsFusionEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FusionAppsFusionEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FusionAppsFusionEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.appliedPatchBundles">AppliedPatchBundles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.createFusionEnvironmentAdminUserDetails">CreateFusionEnvironmentAdminUserDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.idcsDomainUrl">IdcsDomainUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.isBreakGlassEnabled">IsBreakGlassEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.kmsKeyInfo">KmsKeyInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList">FusionAppsFusionEnvironmentKmsKeyInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.lockboxId">LockboxId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference">FusionAppsFusionEnvironmentMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.publicUrl">PublicUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.refresh">Refresh</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList">FusionAppsFusionEnvironmentRefreshList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList">FusionAppsFusionEnvironmentRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.subscriptionIds">SubscriptionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.systemName">SystemName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference">FusionAppsFusionEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeUpcomingMaintenance">TimeUpcomingMaintenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.additionalLanguagePacksInput">AdditionalLanguagePacksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.createFusionEnvironmentAdminUserDetailsInput">CreateFusionEnvironmentAdminUserDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.dnsPrefixInput">DnsPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fusionEnvironmentFamilyIdInput">FusionEnvironmentFamilyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fusionEnvironmentTypeInput">FusionEnvironmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy">FusionAppsFusionEnvironmentMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.additionalLanguagePacks">AdditionalLanguagePacks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.dnsPrefix">DnsPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fusionEnvironmentFamilyId">FusionEnvironmentFamilyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fusionEnvironmentType">FusionEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppliedPatchBundles`<sup>Required</sup> <a name="AppliedPatchBundles" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.appliedPatchBundles"></a>

```go
func AppliedPatchBundles() *[]*string
```

- *Type:* *[]*string

---

##### `CreateFusionEnvironmentAdminUserDetails`<sup>Required</sup> <a name="CreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.createFusionEnvironmentAdminUserDetails"></a>

```go
func CreateFusionEnvironmentAdminUserDetails() FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference</a>

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `IdcsDomainUrl`<sup>Required</sup> <a name="IdcsDomainUrl" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.idcsDomainUrl"></a>

```go
func IdcsDomainUrl() *string
```

- *Type:* *string

---

##### `IsBreakGlassEnabled`<sup>Required</sup> <a name="IsBreakGlassEnabled" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.isBreakGlassEnabled"></a>

```go
func IsBreakGlassEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KmsKeyInfo`<sup>Required</sup> <a name="KmsKeyInfo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.kmsKeyInfo"></a>

```go
func KmsKeyInfo() FusionAppsFusionEnvironmentKmsKeyInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList">FusionAppsFusionEnvironmentKmsKeyInfoList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LockboxId`<sup>Required</sup> <a name="LockboxId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.lockboxId"></a>

```go
func LockboxId() *string
```

- *Type:* *string

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() FusionAppsFusionEnvironmentMaintenancePolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference">FusionAppsFusionEnvironmentMaintenancePolicyOutputReference</a>

---

##### `PublicUrl`<sup>Required</sup> <a name="PublicUrl" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.publicUrl"></a>

```go
func PublicUrl() *string
```

- *Type:* *string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.refresh"></a>

```go
func Refresh() FusionAppsFusionEnvironmentRefreshList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList">FusionAppsFusionEnvironmentRefreshList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.rules"></a>

```go
func Rules() FusionAppsFusionEnvironmentRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList">FusionAppsFusionEnvironmentRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubscriptionIds`<sup>Required</sup> <a name="SubscriptionIds" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.subscriptionIds"></a>

```go
func SubscriptionIds() *[]*string
```

- *Type:* *[]*string

---

##### `SystemName`<sup>Required</sup> <a name="SystemName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.systemName"></a>

```go
func SystemName() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeouts"></a>

```go
func Timeouts() FusionAppsFusionEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference">FusionAppsFusionEnvironmentTimeoutsOutputReference</a>

---

##### `TimeUpcomingMaintenance`<sup>Required</sup> <a name="TimeUpcomingMaintenance" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeUpcomingMaintenance"></a>

```go
func TimeUpcomingMaintenance() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AdditionalLanguagePacksInput`<sup>Optional</sup> <a name="AdditionalLanguagePacksInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.additionalLanguagePacksInput"></a>

```go
func AdditionalLanguagePacksInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CreateFusionEnvironmentAdminUserDetailsInput`<sup>Optional</sup> <a name="CreateFusionEnvironmentAdminUserDetailsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.createFusionEnvironmentAdminUserDetailsInput"></a>

```go
func CreateFusionEnvironmentAdminUserDetailsInput() FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DnsPrefixInput`<sup>Optional</sup> <a name="DnsPrefixInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.dnsPrefixInput"></a>

```go
func DnsPrefixInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FusionEnvironmentFamilyIdInput`<sup>Optional</sup> <a name="FusionEnvironmentFamilyIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fusionEnvironmentFamilyIdInput"></a>

```go
func FusionEnvironmentFamilyIdInput() *string
```

- *Type:* *string

---

##### `FusionEnvironmentTypeInput`<sup>Optional</sup> <a name="FusionEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fusionEnvironmentTypeInput"></a>

```go
func FusionEnvironmentTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() FusionAppsFusionEnvironmentMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy">FusionAppsFusionEnvironmentMaintenancePolicy</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalLanguagePacks`<sup>Required</sup> <a name="AdditionalLanguagePacks" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.additionalLanguagePacks"></a>

```go
func AdditionalLanguagePacks() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsPrefix`<sup>Required</sup> <a name="DnsPrefix" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.dnsPrefix"></a>

```go
func DnsPrefix() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FusionEnvironmentFamilyId`<sup>Required</sup> <a name="FusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fusionEnvironmentFamilyId"></a>

```go
func FusionEnvironmentFamilyId() *string
```

- *Type:* *string

---

##### `FusionEnvironmentType`<sup>Required</sup> <a name="FusionEnvironmentType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.fusionEnvironmentType"></a>

```go
func FusionEnvironmentType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentConfig <a name="FusionAppsFusionEnvironmentConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CreateFusionEnvironmentAdminUserDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails,
	DisplayName: *string,
	FusionEnvironmentFamilyId: *string,
	FusionEnvironmentType: *string,
	AdditionalLanguagePacks: *[]*string,
	DefinedTags: *map[string]*string,
	DnsPrefix: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	KmsKeyId: *string,
	MaintenancePolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy,
	Rules: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#compartment_id FusionAppsFusionEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.createFusionEnvironmentAdminUserDetails">CreateFusionEnvironmentAdminUserDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a></code> | create_fusion_environment_admin_user_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#display_name FusionAppsFusionEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.fusionEnvironmentFamilyId">FusionEnvironmentFamilyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#fusion_environment_family_id FusionAppsFusionEnvironment#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.fusionEnvironmentType">FusionEnvironmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#fusion_environment_type FusionAppsFusionEnvironment#fusion_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.additionalLanguagePacks">AdditionalLanguagePacks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#additional_language_packs FusionAppsFusionEnvironment#additional_language_packs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#defined_tags FusionAppsFusionEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.dnsPrefix">DnsPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#dns_prefix FusionAppsFusionEnvironment#dns_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#freeform_tags FusionAppsFusionEnvironment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#id FusionAppsFusionEnvironment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#kms_key_id FusionAppsFusionEnvironment#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy">FusionAppsFusionEnvironmentMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts">FusionAppsFusionEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#compartment_id FusionAppsFusionEnvironment#compartment_id}.

---

##### `CreateFusionEnvironmentAdminUserDetails`<sup>Required</sup> <a name="CreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.createFusionEnvironmentAdminUserDetails"></a>

```go
CreateFusionEnvironmentAdminUserDetails FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a>

create_fusion_environment_admin_user_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#create_fusion_environment_admin_user_details FusionAppsFusionEnvironment#create_fusion_environment_admin_user_details}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#display_name FusionAppsFusionEnvironment#display_name}.

---

##### `FusionEnvironmentFamilyId`<sup>Required</sup> <a name="FusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.fusionEnvironmentFamilyId"></a>

```go
FusionEnvironmentFamilyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#fusion_environment_family_id FusionAppsFusionEnvironment#fusion_environment_family_id}.

---

##### `FusionEnvironmentType`<sup>Required</sup> <a name="FusionEnvironmentType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.fusionEnvironmentType"></a>

```go
FusionEnvironmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#fusion_environment_type FusionAppsFusionEnvironment#fusion_environment_type}.

---

##### `AdditionalLanguagePacks`<sup>Optional</sup> <a name="AdditionalLanguagePacks" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.additionalLanguagePacks"></a>

```go
AdditionalLanguagePacks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#additional_language_packs FusionAppsFusionEnvironment#additional_language_packs}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#defined_tags FusionAppsFusionEnvironment#defined_tags}.

---

##### `DnsPrefix`<sup>Optional</sup> <a name="DnsPrefix" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.dnsPrefix"></a>

```go
DnsPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#dns_prefix FusionAppsFusionEnvironment#dns_prefix}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#freeform_tags FusionAppsFusionEnvironment#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#id FusionAppsFusionEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#kms_key_id FusionAppsFusionEnvironment#kms_key_id}.

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy FusionAppsFusionEnvironmentMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy">FusionAppsFusionEnvironmentMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#maintenance_policy FusionAppsFusionEnvironment#maintenance_policy}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#rules FusionAppsFusionEnvironment#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentConfig.property.timeouts"></a>

```go
Timeouts FusionAppsFusionEnvironmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts">FusionAppsFusionEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#timeouts FusionAppsFusionEnvironment#timeouts}

---

### FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails <a name="FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails {
	EmailAddress: *string,
	FirstName: *string,
	LastName: *string,
	Username: *string,
	Password: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#email_address FusionAppsFusionEnvironment#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#first_name FusionAppsFusionEnvironment#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#last_name FusionAppsFusionEnvironment#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#username FusionAppsFusionEnvironment#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#password FusionAppsFusionEnvironment#password}. |

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#email_address FusionAppsFusionEnvironment#email_address}.

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#first_name FusionAppsFusionEnvironment#first_name}.

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#last_name FusionAppsFusionEnvironment#last_name}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#username FusionAppsFusionEnvironment#username}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#password FusionAppsFusionEnvironment#password}.

---

### FusionAppsFusionEnvironmentKmsKeyInfo <a name="FusionAppsFusionEnvironmentKmsKeyInfo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentKmsKeyInfo {

}
```


### FusionAppsFusionEnvironmentMaintenancePolicy <a name="FusionAppsFusionEnvironmentMaintenancePolicy" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentMaintenancePolicy {
	EnvironmentMaintenanceOverride: *string,
	MonthlyPatchingOverride: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy.property.environmentMaintenanceOverride">EnvironmentMaintenanceOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#environment_maintenance_override FusionAppsFusionEnvironment#environment_maintenance_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy.property.monthlyPatchingOverride">MonthlyPatchingOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#monthly_patching_override FusionAppsFusionEnvironment#monthly_patching_override}. |

---

##### `EnvironmentMaintenanceOverride`<sup>Optional</sup> <a name="EnvironmentMaintenanceOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy.property.environmentMaintenanceOverride"></a>

```go
EnvironmentMaintenanceOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#environment_maintenance_override FusionAppsFusionEnvironment#environment_maintenance_override}.

---

##### `MonthlyPatchingOverride`<sup>Optional</sup> <a name="MonthlyPatchingOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy.property.monthlyPatchingOverride"></a>

```go
MonthlyPatchingOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#monthly_patching_override FusionAppsFusionEnvironment#monthly_patching_override}.

---

### FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes <a name="FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes {

}
```


### FusionAppsFusionEnvironmentRefresh <a name="FusionAppsFusionEnvironmentRefresh" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefresh"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefresh.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentRefresh {

}
```


### FusionAppsFusionEnvironmentRules <a name="FusionAppsFusionEnvironmentRules" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentRules {
	Action: *string,
	Conditions: interface{},
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRules.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#action FusionAppsFusionEnvironment#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRules.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRules.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#description FusionAppsFusionEnvironment#description}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#action FusionAppsFusionEnvironment#action}.

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRules.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#conditions FusionAppsFusionEnvironment#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#description FusionAppsFusionEnvironment#description}.

---

### FusionAppsFusionEnvironmentRulesConditions <a name="FusionAppsFusionEnvironmentRulesConditions" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentRulesConditions {
	AttributeName: *string,
	AttributeValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditions.property.attributeName">AttributeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#attribute_name FusionAppsFusionEnvironment#attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditions.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#attribute_value FusionAppsFusionEnvironment#attribute_value}. |

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditions.property.attributeName"></a>

```go
AttributeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#attribute_name FusionAppsFusionEnvironment#attribute_name}.

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditions.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#attribute_value FusionAppsFusionEnvironment#attribute_value}.

---

### FusionAppsFusionEnvironmentTimeouts <a name="FusionAppsFusionEnvironmentTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

&fusionappsfusionenvironment.FusionAppsFusionEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#create FusionAppsFusionEnvironment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#delete FusionAppsFusionEnvironment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#update FusionAppsFusionEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#create FusionAppsFusionEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#delete FusionAppsFusionEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment#update FusionAppsFusionEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference <a name="FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">FusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a>

---


### FusionAppsFusionEnvironmentKmsKeyInfoList <a name="FusionAppsFusionEnvironmentKmsKeyInfoList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentKmsKeyInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FusionAppsFusionEnvironmentKmsKeyInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.get"></a>

```go
func Get(index *f64) FusionAppsFusionEnvironmentKmsKeyInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FusionAppsFusionEnvironmentKmsKeyInfoOutputReference <a name="FusionAppsFusionEnvironmentKmsKeyInfoOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentKmsKeyInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FusionAppsFusionEnvironmentKmsKeyInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyId">ActiveKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.currentKeyLifecycleState">CurrentKeyLifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyId">ScheduledKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyStatus">ScheduledKeyStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyVersion">ScheduledKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledLifecycleState">ScheduledLifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfo">FusionAppsFusionEnvironmentKmsKeyInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveKeyId`<sup>Required</sup> <a name="ActiveKeyId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyId"></a>

```go
func ActiveKeyId() *string
```

- *Type:* *string

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyVersion"></a>

```go
func ActiveKeyVersion() *string
```

- *Type:* *string

---

##### `CurrentKeyLifecycleState`<sup>Required</sup> <a name="CurrentKeyLifecycleState" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.currentKeyLifecycleState"></a>

```go
func CurrentKeyLifecycleState() *string
```

- *Type:* *string

---

##### `ScheduledKeyId`<sup>Required</sup> <a name="ScheduledKeyId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyId"></a>

```go
func ScheduledKeyId() *string
```

- *Type:* *string

---

##### `ScheduledKeyStatus`<sup>Required</sup> <a name="ScheduledKeyStatus" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyStatus"></a>

```go
func ScheduledKeyStatus() *string
```

- *Type:* *string

---

##### `ScheduledKeyVersion`<sup>Required</sup> <a name="ScheduledKeyVersion" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyVersion"></a>

```go
func ScheduledKeyVersion() *string
```

- *Type:* *string

---

##### `ScheduledLifecycleState`<sup>Required</sup> <a name="ScheduledLifecycleState" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledLifecycleState"></a>

```go
func ScheduledLifecycleState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() FusionAppsFusionEnvironmentKmsKeyInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentKmsKeyInfo">FusionAppsFusionEnvironmentKmsKeyInfo</a>

---


### FusionAppsFusionEnvironmentMaintenancePolicyOutputReference <a name="FusionAppsFusionEnvironmentMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FusionAppsFusionEnvironmentMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resetEnvironmentMaintenanceOverride">ResetEnvironmentMaintenanceOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resetMonthlyPatchingOverride">ResetMonthlyPatchingOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironmentMaintenanceOverride` <a name="ResetEnvironmentMaintenanceOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resetEnvironmentMaintenanceOverride"></a>

```go
func ResetEnvironmentMaintenanceOverride()
```

##### `ResetMonthlyPatchingOverride` <a name="ResetMonthlyPatchingOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resetMonthlyPatchingOverride"></a>

```go
func ResetMonthlyPatchingOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">QuarterlyUpgradeBeginTimes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList">FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.environmentMaintenanceOverrideInput">EnvironmentMaintenanceOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.monthlyPatchingOverrideInput">MonthlyPatchingOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.environmentMaintenanceOverride">EnvironmentMaintenanceOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.monthlyPatchingOverride">MonthlyPatchingOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy">FusionAppsFusionEnvironmentMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QuarterlyUpgradeBeginTimes`<sup>Required</sup> <a name="QuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```go
func QuarterlyUpgradeBeginTimes() FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList">FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList</a>

---

##### `EnvironmentMaintenanceOverrideInput`<sup>Optional</sup> <a name="EnvironmentMaintenanceOverrideInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.environmentMaintenanceOverrideInput"></a>

```go
func EnvironmentMaintenanceOverrideInput() *string
```

- *Type:* *string

---

##### `MonthlyPatchingOverrideInput`<sup>Optional</sup> <a name="MonthlyPatchingOverrideInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.monthlyPatchingOverrideInput"></a>

```go
func MonthlyPatchingOverrideInput() *string
```

- *Type:* *string

---

##### `EnvironmentMaintenanceOverride`<sup>Required</sup> <a name="EnvironmentMaintenanceOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.environmentMaintenanceOverride"></a>

```go
func EnvironmentMaintenanceOverride() *string
```

- *Type:* *string

---

##### `MonthlyPatchingOverride`<sup>Required</sup> <a name="MonthlyPatchingOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.monthlyPatchingOverride"></a>

```go
func MonthlyPatchingOverride() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() FusionAppsFusionEnvironmentMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicy">FusionAppsFusionEnvironmentMaintenancePolicy</a>

---


### FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList <a name="FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get"></a>

```go
func Get(index *f64) FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference <a name="FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue">BeginTimesValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType">OverrideType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes">FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BeginTimesValue`<sup>Required</sup> <a name="BeginTimesValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue"></a>

```go
func BeginTimesValue() *string
```

- *Type:* *string

---

##### `OverrideType`<sup>Required</sup> <a name="OverrideType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType"></a>

```go
func OverrideType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue"></a>

```go
func InternalValue() FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes">FusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes</a>

---


### FusionAppsFusionEnvironmentRefreshList <a name="FusionAppsFusionEnvironmentRefreshList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentRefreshList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FusionAppsFusionEnvironmentRefreshList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.get"></a>

```go
func Get(index *f64) FusionAppsFusionEnvironmentRefreshOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FusionAppsFusionEnvironmentRefreshOutputReference <a name="FusionAppsFusionEnvironmentRefreshOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentRefreshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FusionAppsFusionEnvironmentRefreshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.sourceFusionEnvironmentId">SourceFusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.timeOfRestorationPoint">TimeOfRestorationPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefresh">FusionAppsFusionEnvironmentRefresh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceFusionEnvironmentId`<sup>Required</sup> <a name="SourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.sourceFusionEnvironmentId"></a>

```go
func SourceFusionEnvironmentId() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeOfRestorationPoint`<sup>Required</sup> <a name="TimeOfRestorationPoint" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.timeOfRestorationPoint"></a>

```go
func TimeOfRestorationPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefreshOutputReference.property.internalValue"></a>

```go
func InternalValue() FusionAppsFusionEnvironmentRefresh
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRefresh">FusionAppsFusionEnvironmentRefresh</a>

---


### FusionAppsFusionEnvironmentRulesConditionsList <a name="FusionAppsFusionEnvironmentRulesConditionsList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentRulesConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FusionAppsFusionEnvironmentRulesConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.get"></a>

```go
func Get(index *f64) FusionAppsFusionEnvironmentRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FusionAppsFusionEnvironmentRulesConditionsOutputReference <a name="FusionAppsFusionEnvironmentRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentRulesConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FusionAppsFusionEnvironmentRulesConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeNameInput"></a>

```go
func AttributeNameInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FusionAppsFusionEnvironmentRulesList <a name="FusionAppsFusionEnvironmentRulesList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FusionAppsFusionEnvironmentRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.get"></a>

```go
func Get(index *f64) FusionAppsFusionEnvironmentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FusionAppsFusionEnvironmentRulesOutputReference <a name="FusionAppsFusionEnvironmentRulesOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FusionAppsFusionEnvironmentRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList">FusionAppsFusionEnvironmentRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.conditions"></a>

```go
func Conditions() FusionAppsFusionEnvironmentRulesConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesConditionsList">FusionAppsFusionEnvironmentRulesConditionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FusionAppsFusionEnvironmentTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironment"

fusionappsfusionenvironment.NewFusionAppsFusionEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FusionAppsFusionEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironment.FusionAppsFusionEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



