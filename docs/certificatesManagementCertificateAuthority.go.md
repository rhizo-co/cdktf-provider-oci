# `certificatesManagementCertificateAuthority` Submodule <a name="`certificatesManagementCertificateAuthority` Submodule" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatesManagementCertificateAuthority <a name="CertificatesManagementCertificateAuthority" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority oci_certificates_management_certificate_authority}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthority(scope Construct, id *string, config CertificatesManagementCertificateAuthorityConfig) CertificatesManagementCertificateAuthority
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig">PutCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityRules">PutCertificateAuthorityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateRevocationListDetails">PutCertificateRevocationListDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetCertificateAuthorityRules">ResetCertificateAuthorityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetCertificateRevocationListDetails">ResetCertificateRevocationListDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateAuthorityConfig` <a name="PutCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig"></a>

```go
func PutCertificateAuthorityConfig(value CertificatesManagementCertificateAuthorityCertificateAuthorityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

---

##### `PutCertificateAuthorityRules` <a name="PutCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityRules"></a>

```go
func PutCertificateAuthorityRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateAuthorityRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCertificateRevocationListDetails` <a name="PutCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateRevocationListDetails"></a>

```go
func PutCertificateRevocationListDetails(value CertificatesManagementCertificateAuthorityCertificateRevocationListDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putCertificateRevocationListDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putTimeouts"></a>

```go
func PutTimeouts(value CertificatesManagementCertificateAuthorityTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a>

---

##### `ResetCertificateAuthorityRules` <a name="ResetCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetCertificateAuthorityRules"></a>

```go
func ResetCertificateAuthorityRules()
```

##### `ResetCertificateRevocationListDetails` <a name="ResetCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetCertificateRevocationListDetails"></a>

```go
func ResetCertificateRevocationListDetails()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthority_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthority_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthority_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthority_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CertificatesManagementCertificateAuthority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CertificatesManagementCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CertificatesManagementCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CertificatesManagementCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityConfig">CertificateAuthorityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityRules">CertificateAuthorityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList">CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateRevocationListDetails">CertificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.configType">ConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.currentVersion">CurrentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList">CertificatesManagementCertificateAuthorityCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList">CertificatesManagementCertificateAuthoritySubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference">CertificatesManagementCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityConfigInput">CertificateAuthorityConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityRulesInput">CertificateAuthorityRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateRevocationListDetailsInput">CertificateRevocationListDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateAuthorityConfig`<sup>Required</sup> <a name="CertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityConfig"></a>

```go
func CertificateAuthorityConfig() CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference</a>

---

##### `CertificateAuthorityRules`<sup>Required</sup> <a name="CertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityRules"></a>

```go
func CertificateAuthorityRules() CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList">CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList</a>

---

##### `CertificateRevocationListDetails`<sup>Required</sup> <a name="CertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateRevocationListDetails"></a>

```go
func CertificateRevocationListDetails() CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference</a>

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.configType"></a>

```go
func ConfigType() *string
```

- *Type:* *string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.currentVersion"></a>

```go
func CurrentVersion() CertificatesManagementCertificateAuthorityCurrentVersionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList">CertificatesManagementCertificateAuthorityCurrentVersionList</a>

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.issuerCertificateAuthorityId"></a>

```go
func IssuerCertificateAuthorityId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.signingAlgorithm"></a>

```go
func SigningAlgorithm() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.subject"></a>

```go
func Subject() CertificatesManagementCertificateAuthoritySubjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList">CertificatesManagementCertificateAuthoritySubjectList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeouts"></a>

```go
func Timeouts() CertificatesManagementCertificateAuthorityTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference">CertificatesManagementCertificateAuthorityTimeoutsOutputReference</a>

---

##### `CertificateAuthorityConfigInput`<sup>Optional</sup> <a name="CertificateAuthorityConfigInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityConfigInput"></a>

```go
func CertificateAuthorityConfigInput() CertificatesManagementCertificateAuthorityCertificateAuthorityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

---

##### `CertificateAuthorityRulesInput`<sup>Optional</sup> <a name="CertificateAuthorityRulesInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateAuthorityRulesInput"></a>

```go
func CertificateAuthorityRulesInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateRevocationListDetailsInput`<sup>Optional</sup> <a name="CertificateRevocationListDetailsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.certificateRevocationListDetailsInput"></a>

```go
func CertificateRevocationListDetailsInput() CertificatesManagementCertificateAuthorityCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthority.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatesManagementCertificateAuthorityCertificateAuthorityConfig <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig {
	ConfigType: *string,
	Subject: github.com/rhizo-co/cdktf-provider-oci-go/oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject,
	IssuerCertificateAuthorityId: *string,
	SigningAlgorithm: *string,
	Validity: github.com/rhizo-co/cdktf-provider-oci-go/oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity,
	VersionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.configType">ConfigType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#config_type CertificatesManagementCertificateAuthority#config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a></code> | subject block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#issuer_certificate_authority_id CertificatesManagementCertificateAuthority#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#signing_algorithm CertificatesManagementCertificateAuthority#signing_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a></code> | validity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.versionName">VersionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#version_name CertificatesManagementCertificateAuthority#version_name}. |

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.configType"></a>

```go
ConfigType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#config_type CertificatesManagementCertificateAuthority#config_type}.

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.subject"></a>

```go
Subject CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#subject CertificatesManagementCertificateAuthority#subject}

---

##### `IssuerCertificateAuthorityId`<sup>Optional</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.issuerCertificateAuthorityId"></a>

```go
IssuerCertificateAuthorityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#issuer_certificate_authority_id CertificatesManagementCertificateAuthority#issuer_certificate_authority_id}.

---

##### `SigningAlgorithm`<sup>Optional</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.signingAlgorithm"></a>

```go
SigningAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#signing_algorithm CertificatesManagementCertificateAuthority#signing_algorithm}.

---

##### `Validity`<sup>Optional</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.validity"></a>

```go
Validity CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#validity CertificatesManagementCertificateAuthority#validity}

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig.property.versionName"></a>

```go
VersionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#version_name CertificatesManagementCertificateAuthority#version_name}.

---

### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject {
	CommonName: *string,
	Country: *string,
	DistinguishedNameQualifier: *string,
	DomainComponent: *string,
	GenerationQualifier: *string,
	GivenName: *string,
	Initials: *string,
	LocalityName: *string,
	Organization: *string,
	OrganizationalUnit: *string,
	Pseudonym: *string,
	SerialNumber: *string,
	StateOrProvinceName: *string,
	Street: *string,
	Surname: *string,
	Title: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.commonName">CommonName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#common_name CertificatesManagementCertificateAuthority#common_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#country CertificatesManagementCertificateAuthority#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#distinguished_name_qualifier CertificatesManagementCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.domainComponent">DomainComponent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#domain_component CertificatesManagementCertificateAuthority#domain_component}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#generation_qualifier CertificatesManagementCertificateAuthority#generation_qualifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.givenName">GivenName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#given_name CertificatesManagementCertificateAuthority#given_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.initials">Initials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#initials CertificatesManagementCertificateAuthority#initials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.localityName">LocalityName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#locality_name CertificatesManagementCertificateAuthority#locality_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organization CertificatesManagementCertificateAuthority#organization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organizational_unit CertificatesManagementCertificateAuthority#organizational_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#pseudonym CertificatesManagementCertificateAuthority#pseudonym}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#serial_number CertificatesManagementCertificateAuthority#serial_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#state_or_province_name CertificatesManagementCertificateAuthority#state_or_province_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.street">Street</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#street CertificatesManagementCertificateAuthority#street}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.surname">Surname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#surname CertificatesManagementCertificateAuthority#surname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#title CertificatesManagementCertificateAuthority#title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#user_id CertificatesManagementCertificateAuthority#user_id}. |

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#common_name CertificatesManagementCertificateAuthority#common_name}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#country CertificatesManagementCertificateAuthority#country}.

---

##### `DistinguishedNameQualifier`<sup>Optional</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.distinguishedNameQualifier"></a>

```go
DistinguishedNameQualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#distinguished_name_qualifier CertificatesManagementCertificateAuthority#distinguished_name_qualifier}.

---

##### `DomainComponent`<sup>Optional</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.domainComponent"></a>

```go
DomainComponent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#domain_component CertificatesManagementCertificateAuthority#domain_component}.

---

##### `GenerationQualifier`<sup>Optional</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.generationQualifier"></a>

```go
GenerationQualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#generation_qualifier CertificatesManagementCertificateAuthority#generation_qualifier}.

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.givenName"></a>

```go
GivenName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#given_name CertificatesManagementCertificateAuthority#given_name}.

---

##### `Initials`<sup>Optional</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.initials"></a>

```go
Initials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#initials CertificatesManagementCertificateAuthority#initials}.

---

##### `LocalityName`<sup>Optional</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.localityName"></a>

```go
LocalityName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#locality_name CertificatesManagementCertificateAuthority#locality_name}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organization CertificatesManagementCertificateAuthority#organization}.

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.organizationalUnit"></a>

```go
OrganizationalUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#organizational_unit CertificatesManagementCertificateAuthority#organizational_unit}.

---

##### `Pseudonym`<sup>Optional</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.pseudonym"></a>

```go
Pseudonym *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#pseudonym CertificatesManagementCertificateAuthority#pseudonym}.

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.serialNumber"></a>

```go
SerialNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#serial_number CertificatesManagementCertificateAuthority#serial_number}.

---

##### `StateOrProvinceName`<sup>Optional</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.stateOrProvinceName"></a>

```go
StateOrProvinceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#state_or_province_name CertificatesManagementCertificateAuthority#state_or_province_name}.

---

##### `Street`<sup>Optional</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.street"></a>

```go
Street *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#street CertificatesManagementCertificateAuthority#street}.

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.surname"></a>

```go
Surname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#surname CertificatesManagementCertificateAuthority#surname}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#title CertificatesManagementCertificateAuthority#title}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#user_id CertificatesManagementCertificateAuthority#user_id}.

---

### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity {
	TimeOfValidityNotAfter: *string,
	TimeOfValidityNotBefore: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_after CertificatesManagementCertificateAuthority#time_of_validity_not_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_before CertificatesManagementCertificateAuthority#time_of_validity_not_before}. |

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.property.timeOfValidityNotAfter"></a>

```go
TimeOfValidityNotAfter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_after CertificatesManagementCertificateAuthority#time_of_validity_not_after}.

---

##### `TimeOfValidityNotBefore`<sup>Optional</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity.property.timeOfValidityNotBefore"></a>

```go
TimeOfValidityNotBefore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#time_of_validity_not_before CertificatesManagementCertificateAuthority#time_of_validity_not_before}.

---

### CertificatesManagementCertificateAuthorityCertificateAuthorityRules <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules {
	RuleType: *string,
	CertificateAuthorityMaxValidityDuration: *string,
	LeafCertificateMaxValidityDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.ruleType">RuleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#rule_type CertificatesManagementCertificateAuthority#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.certificateAuthorityMaxValidityDuration">CertificateAuthorityMaxValidityDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_max_validity_duration CertificatesManagementCertificateAuthority#certificate_authority_max_validity_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.leafCertificateMaxValidityDuration">LeafCertificateMaxValidityDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#leaf_certificate_max_validity_duration CertificatesManagementCertificateAuthority#leaf_certificate_max_validity_duration}. |

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.ruleType"></a>

```go
RuleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#rule_type CertificatesManagementCertificateAuthority#rule_type}.

---

##### `CertificateAuthorityMaxValidityDuration`<sup>Optional</sup> <a name="CertificateAuthorityMaxValidityDuration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.certificateAuthorityMaxValidityDuration"></a>

```go
CertificateAuthorityMaxValidityDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_max_validity_duration CertificatesManagementCertificateAuthority#certificate_authority_max_validity_duration}.

---

##### `LeafCertificateMaxValidityDuration`<sup>Optional</sup> <a name="LeafCertificateMaxValidityDuration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRules.property.leafCertificateMaxValidityDuration"></a>

```go
LeafCertificateMaxValidityDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#leaf_certificate_max_validity_duration CertificatesManagementCertificateAuthority#leaf_certificate_max_validity_duration}.

---

### CertificatesManagementCertificateAuthorityCertificateRevocationListDetails <a name="CertificatesManagementCertificateAuthorityCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails {
	ObjectStorageConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig,
	CustomFormattedUrls: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.property.objectStorageConfig">ObjectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a></code> | object_storage_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.property.customFormattedUrls">CustomFormattedUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#custom_formatted_urls CertificatesManagementCertificateAuthority#custom_formatted_urls}. |

---

##### `ObjectStorageConfig`<sup>Required</sup> <a name="ObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.property.objectStorageConfig"></a>

```go
ObjectStorageConfig CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

object_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_config CertificatesManagementCertificateAuthority#object_storage_config}

---

##### `CustomFormattedUrls`<sup>Optional</sup> <a name="CustomFormattedUrls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails.property.customFormattedUrls"></a>

```go
CustomFormattedUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#custom_formatted_urls CertificatesManagementCertificateAuthority#custom_formatted_urls}.

---

### CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig <a name="CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig {
	ObjectStorageBucketName: *string,
	ObjectStorageObjectNameFormat: *string,
	ObjectStorageNamespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_bucket_name CertificatesManagementCertificateAuthority#object_storage_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageObjectNameFormat">ObjectStorageObjectNameFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_object_name_format CertificatesManagementCertificateAuthority#object_storage_object_name_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageNamespace">ObjectStorageNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_namespace CertificatesManagementCertificateAuthority#object_storage_namespace}. |

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageBucketName"></a>

```go
ObjectStorageBucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_bucket_name CertificatesManagementCertificateAuthority#object_storage_bucket_name}.

---

##### `ObjectStorageObjectNameFormat`<sup>Required</sup> <a name="ObjectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageObjectNameFormat"></a>

```go
ObjectStorageObjectNameFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_object_name_format CertificatesManagementCertificateAuthority#object_storage_object_name_format}.

---

##### `ObjectStorageNamespace`<sup>Optional</sup> <a name="ObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig.property.objectStorageNamespace"></a>

```go
ObjectStorageNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#object_storage_namespace CertificatesManagementCertificateAuthority#object_storage_namespace}.

---

### CertificatesManagementCertificateAuthorityConfig <a name="CertificatesManagementCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateAuthorityConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig,
	CompartmentId: *string,
	KmsKeyId: *string,
	Name: *string,
	CertificateAuthorityRules: interface{},
	CertificateRevocationListDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityConfig">CertificateAuthorityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | certificate_authority_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#compartment_id CertificatesManagementCertificateAuthority#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#kms_key_id CertificatesManagementCertificateAuthority#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#name CertificatesManagementCertificateAuthority#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityRules">CertificateAuthorityRules</a></code> | <code>interface{}</code> | certificate_authority_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateRevocationListDetails">CertificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | certificate_revocation_list_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#defined_tags CertificatesManagementCertificateAuthority#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#description CertificatesManagementCertificateAuthority#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#freeform_tags CertificatesManagementCertificateAuthority#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#id CertificatesManagementCertificateAuthority#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateAuthorityConfig`<sup>Required</sup> <a name="CertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityConfig"></a>

```go
CertificateAuthorityConfig CertificatesManagementCertificateAuthorityCertificateAuthorityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

certificate_authority_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_config CertificatesManagementCertificateAuthority#certificate_authority_config}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#compartment_id CertificatesManagementCertificateAuthority#compartment_id}.

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#kms_key_id CertificatesManagementCertificateAuthority#kms_key_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#name CertificatesManagementCertificateAuthority#name}.

---

##### `CertificateAuthorityRules`<sup>Optional</sup> <a name="CertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateAuthorityRules"></a>

```go
CertificateAuthorityRules interface{}
```

- *Type:* interface{}

certificate_authority_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_authority_rules CertificatesManagementCertificateAuthority#certificate_authority_rules}

---

##### `CertificateRevocationListDetails`<sup>Optional</sup> <a name="CertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.certificateRevocationListDetails"></a>

```go
CertificateRevocationListDetails CertificatesManagementCertificateAuthorityCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

certificate_revocation_list_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#certificate_revocation_list_details CertificatesManagementCertificateAuthority#certificate_revocation_list_details}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#defined_tags CertificatesManagementCertificateAuthority#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#description CertificatesManagementCertificateAuthority#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#freeform_tags CertificatesManagementCertificateAuthority#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#id CertificatesManagementCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityConfig.property.timeouts"></a>

```go
Timeouts CertificatesManagementCertificateAuthorityTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts">CertificatesManagementCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#timeouts CertificatesManagementCertificateAuthority#timeouts}

---

### CertificatesManagementCertificateAuthorityCurrentVersion <a name="CertificatesManagementCertificateAuthorityCurrentVersion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCurrentVersion {

}
```


### CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus <a name="CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus {

}
```


### CertificatesManagementCertificateAuthorityCurrentVersionValidity <a name="CertificatesManagementCertificateAuthorityCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity {

}
```


### CertificatesManagementCertificateAuthoritySubject <a name="CertificatesManagementCertificateAuthoritySubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthoritySubject {

}
```


### CertificatesManagementCertificateAuthorityTimeouts <a name="CertificatesManagementCertificateAuthorityTimeouts" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

&certificatesmanagementcertificateauthority.CertificatesManagementCertificateAuthorityTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#create CertificatesManagementCertificateAuthority#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#delete CertificatesManagementCertificateAuthority#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#update CertificatesManagementCertificateAuthority#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#create CertificatesManagementCertificateAuthority#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#delete CertificatesManagementCertificateAuthority#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/certificates_management_certificate_authority#update CertificatesManagementCertificateAuthority#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject">PutSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putValidity">PutValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetIssuerCertificateAuthorityId">ResetIssuerCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetSigningAlgorithm">ResetSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetValidity">ResetValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetVersionName">ResetVersionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubject` <a name="PutSubject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject"></a>

```go
func PutSubject(value CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putSubject.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

---

##### `PutValidity` <a name="PutValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putValidity"></a>

```go
func PutValidity(value CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.putValidity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

---

##### `ResetIssuerCertificateAuthorityId` <a name="ResetIssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetIssuerCertificateAuthorityId"></a>

```go
func ResetIssuerCertificateAuthorityId()
```

##### `ResetSigningAlgorithm` <a name="ResetSigningAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetSigningAlgorithm"></a>

```go
func ResetSigningAlgorithm()
```

##### `ResetValidity` <a name="ResetValidity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetValidity"></a>

```go
func ResetValidity()
```

##### `ResetVersionName` <a name="ResetVersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.resetVersionName"></a>

```go
func ResetVersionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configTypeInput">ConfigTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityIdInput">IssuerCertificateAuthorityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithmInput">SigningAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subjectInput">SubjectInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validityInput">ValidityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionNameInput">VersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configType">ConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subject"></a>

```go
func Subject() CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference</a>

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validity"></a>

```go
func Validity() CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference</a>

---

##### `ConfigTypeInput`<sup>Optional</sup> <a name="ConfigTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configTypeInput"></a>

```go
func ConfigTypeInput() *string
```

- *Type:* *string

---

##### `IssuerCertificateAuthorityIdInput`<sup>Optional</sup> <a name="IssuerCertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityIdInput"></a>

```go
func IssuerCertificateAuthorityIdInput() *string
```

- *Type:* *string

---

##### `SigningAlgorithmInput`<sup>Optional</sup> <a name="SigningAlgorithmInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithmInput"></a>

```go
func SigningAlgorithmInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.subjectInput"></a>

```go
func SubjectInput() CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

---

##### `ValidityInput`<sup>Optional</sup> <a name="ValidityInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.validityInput"></a>

```go
func ValidityInput() CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionNameInput"></a>

```go
func VersionNameInput() *string
```

- *Type:* *string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.configType"></a>

```go
func ConfigType() *string
```

- *Type:* *string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```go
func IssuerCertificateAuthorityId() *string
```

- *Type:* *string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.signingAlgorithm"></a>

```go
func SigningAlgorithm() *string
```

- *Type:* *string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthorityCertificateAuthorityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfig">CertificatesManagementCertificateAuthorityCertificateAuthorityConfig</a>

---


### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetDistinguishedNameQualifier">ResetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetDomainComponent">ResetDomainComponent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetGenerationQualifier">ResetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetInitials">ResetInitials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetLocalityName">ResetLocalityName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetPseudonym">ResetPseudonym</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetStateOrProvinceName">ResetStateOrProvinceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetStreet">ResetStreet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetSurname">ResetSurname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCountry` <a name="ResetCountry" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetDistinguishedNameQualifier` <a name="ResetDistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetDistinguishedNameQualifier"></a>

```go
func ResetDistinguishedNameQualifier()
```

##### `ResetDomainComponent` <a name="ResetDomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetDomainComponent"></a>

```go
func ResetDomainComponent()
```

##### `ResetGenerationQualifier` <a name="ResetGenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetGenerationQualifier"></a>

```go
func ResetGenerationQualifier()
```

##### `ResetGivenName` <a name="ResetGivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetGivenName"></a>

```go
func ResetGivenName()
```

##### `ResetInitials` <a name="ResetInitials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetInitials"></a>

```go
func ResetInitials()
```

##### `ResetLocalityName` <a name="ResetLocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetLocalityName"></a>

```go
func ResetLocalityName()
```

##### `ResetOrganization` <a name="ResetOrganization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetOrganizationalUnit"></a>

```go
func ResetOrganizationalUnit()
```

##### `ResetPseudonym` <a name="ResetPseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetPseudonym"></a>

```go
func ResetPseudonym()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetSerialNumber"></a>

```go
func ResetSerialNumber()
```

##### `ResetStateOrProvinceName` <a name="ResetStateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetStateOrProvinceName"></a>

```go
func ResetStateOrProvinceName()
```

##### `ResetStreet` <a name="ResetStreet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetStreet"></a>

```go
func ResetStreet()
```

##### `ResetSurname` <a name="ResetSurname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetSurname"></a>

```go
func ResetSurname()
```

##### `ResetTitle` <a name="ResetTitle" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetUserId` <a name="ResetUserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifierInput">DistinguishedNameQualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponentInput">DomainComponentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifierInput">GenerationQualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenNameInput">GivenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initialsInput">InitialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityNameInput">LocalityNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonymInput">PseudonymInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceNameInput">StateOrProvinceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.streetInput">StreetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surnameInput">SurnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityName">LocalityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.street">Street</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `DistinguishedNameQualifierInput`<sup>Optional</sup> <a name="DistinguishedNameQualifierInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```go
func DistinguishedNameQualifierInput() *string
```

- *Type:* *string

---

##### `DomainComponentInput`<sup>Optional</sup> <a name="DomainComponentInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponentInput"></a>

```go
func DomainComponentInput() *string
```

- *Type:* *string

---

##### `GenerationQualifierInput`<sup>Optional</sup> <a name="GenerationQualifierInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifierInput"></a>

```go
func GenerationQualifierInput() *string
```

- *Type:* *string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenNameInput"></a>

```go
func GivenNameInput() *string
```

- *Type:* *string

---

##### `InitialsInput`<sup>Optional</sup> <a name="InitialsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initialsInput"></a>

```go
func InitialsInput() *string
```

- *Type:* *string

---

##### `LocalityNameInput`<sup>Optional</sup> <a name="LocalityNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityNameInput"></a>

```go
func LocalityNameInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnitInput"></a>

```go
func OrganizationalUnitInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PseudonymInput`<sup>Optional</sup> <a name="PseudonymInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonymInput"></a>

```go
func PseudonymInput() *string
```

- *Type:* *string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumberInput"></a>

```go
func SerialNumberInput() *string
```

- *Type:* *string

---

##### `StateOrProvinceNameInput`<sup>Optional</sup> <a name="StateOrProvinceNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceNameInput"></a>

```go
func StateOrProvinceNameInput() *string
```

- *Type:* *string

---

##### `StreetInput`<sup>Optional</sup> <a name="StreetInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.streetInput"></a>

```go
func StreetInput() *string
```

- *Type:* *string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surnameInput"></a>

```go
func SurnameInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```go
func DistinguishedNameQualifier() *string
```

- *Type:* *string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.domainComponent"></a>

```go
func DomainComponent() *string
```

- *Type:* *string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier"></a>

```go
func GenerationQualifier() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.localityName"></a>

```go
func LocalityName() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.pseudonym"></a>

```go
func Pseudonym() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```go
func StateOrProvinceName() *string
```

- *Type:* *string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.street"></a>

```go
func Street() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigSubject</a>

---


### CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resetTimeOfValidityNotBefore">ResetTimeOfValidityNotBefore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeOfValidityNotBefore` <a name="ResetTimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.resetTimeOfValidityNotBefore"></a>

```go
func ResetTimeOfValidityNotBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfterInput">TimeOfValidityNotAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBeforeInput">TimeOfValidityNotBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotAfterInput`<sup>Optional</sup> <a name="TimeOfValidityNotAfterInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfterInput"></a>

```go
func TimeOfValidityNotAfterInput() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotBeforeInput`<sup>Optional</sup> <a name="TimeOfValidityNotBeforeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBeforeInput"></a>

```go
func TimeOfValidityNotBeforeInput() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```go
func TimeOfValidityNotAfter() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```go
func TimeOfValidityNotBefore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity">CertificatesManagementCertificateAuthorityCertificateAuthorityConfigValidity</a>

---


### CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCertificateAuthorityRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get"></a>

```go
func Get(index *f64) CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resetCertificateAuthorityMaxValidityDuration">ResetCertificateAuthorityMaxValidityDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resetLeafCertificateMaxValidityDuration">ResetLeafCertificateMaxValidityDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityMaxValidityDuration` <a name="ResetCertificateAuthorityMaxValidityDuration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resetCertificateAuthorityMaxValidityDuration"></a>

```go
func ResetCertificateAuthorityMaxValidityDuration()
```

##### `ResetLeafCertificateMaxValidityDuration` <a name="ResetLeafCertificateMaxValidityDuration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.resetLeafCertificateMaxValidityDuration"></a>

```go
func ResetLeafCertificateMaxValidityDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDurationInput">CertificateAuthorityMaxValidityDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDurationInput">LeafCertificateMaxValidityDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleTypeInput">RuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration">CertificateAuthorityMaxValidityDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration">LeafCertificateMaxValidityDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityMaxValidityDurationInput`<sup>Optional</sup> <a name="CertificateAuthorityMaxValidityDurationInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDurationInput"></a>

```go
func CertificateAuthorityMaxValidityDurationInput() *string
```

- *Type:* *string

---

##### `LeafCertificateMaxValidityDurationInput`<sup>Optional</sup> <a name="LeafCertificateMaxValidityDurationInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDurationInput"></a>

```go
func LeafCertificateMaxValidityDurationInput() *string
```

- *Type:* *string

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleTypeInput"></a>

```go
func RuleTypeInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityMaxValidityDuration`<sup>Required</sup> <a name="CertificateAuthorityMaxValidityDuration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration"></a>

```go
func CertificateAuthorityMaxValidityDuration() *string
```

- *Type:* *string

---

##### `LeafCertificateMaxValidityDuration`<sup>Required</sup> <a name="LeafCertificateMaxValidityDuration" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration"></a>

```go
func LeafCertificateMaxValidityDuration() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateAuthorityRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resetObjectStorageNamespace">ResetObjectStorageNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObjectStorageNamespace` <a name="ResetObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.resetObjectStorageNamespace"></a>

```go
func ResetObjectStorageNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketNameInput">ObjectStorageBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespaceInput">ObjectStorageNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormatInput">ObjectStorageObjectNameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">ObjectStorageNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">ObjectStorageObjectNameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectStorageBucketNameInput`<sup>Optional</sup> <a name="ObjectStorageBucketNameInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketNameInput"></a>

```go
func ObjectStorageBucketNameInput() *string
```

- *Type:* *string

---

##### `ObjectStorageNamespaceInput`<sup>Optional</sup> <a name="ObjectStorageNamespaceInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespaceInput"></a>

```go
func ObjectStorageNamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectStorageObjectNameFormatInput`<sup>Optional</sup> <a name="ObjectStorageObjectNameFormatInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormatInput"></a>

```go
func ObjectStorageObjectNameFormatInput() *string
```

- *Type:* *string

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```go
func ObjectStorageBucketName() *string
```

- *Type:* *string

---

##### `ObjectStorageNamespace`<sup>Required</sup> <a name="ObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```go
func ObjectStorageNamespace() *string
```

- *Type:* *string

---

##### `ObjectStorageObjectNameFormat`<sup>Required</sup> <a name="ObjectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```go
func ObjectStorageObjectNameFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

---


### CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference <a name="CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.putObjectStorageConfig">PutObjectStorageConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resetCustomFormattedUrls">ResetCustomFormattedUrls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectStorageConfig` <a name="PutObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.putObjectStorageConfig"></a>

```go
func PutObjectStorageConfig(value CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.putObjectStorageConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

---

##### `ResetCustomFormattedUrls` <a name="ResetCustomFormattedUrls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.resetCustomFormattedUrls"></a>

```go
func ResetCustomFormattedUrls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">ObjectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrlsInput">CustomFormattedUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfigInput">ObjectStorageConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">CustomFormattedUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectStorageConfig`<sup>Required</sup> <a name="ObjectStorageConfig" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```go
func ObjectStorageConfig() CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfigOutputReference</a>

---

##### `CustomFormattedUrlsInput`<sup>Optional</sup> <a name="CustomFormattedUrlsInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrlsInput"></a>

```go
func CustomFormattedUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectStorageConfigInput`<sup>Optional</sup> <a name="ObjectStorageConfigInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.objectStorageConfigInput"></a>

```go
func ObjectStorageConfigInput() CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig">CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsObjectStorageConfig</a>

---

##### `CustomFormattedUrls`<sup>Required</sup> <a name="CustomFormattedUrls" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```go
func CustomFormattedUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthorityCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCertificateRevocationListDetails">CertificatesManagementCertificateAuthorityCertificateRevocationListDetails</a>

---


### CertificatesManagementCertificateAuthorityCurrentVersionList <a name="CertificatesManagementCertificateAuthorityCurrentVersionList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCurrentVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatesManagementCertificateAuthorityCurrentVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.get"></a>

```go
func Get(index *f64) CertificatesManagementCertificateAuthorityCurrentVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CertificatesManagementCertificateAuthorityCurrentVersionOutputReference <a name="CertificatesManagementCertificateAuthorityCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCurrentVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatesManagementCertificateAuthorityCurrentVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.issuerCaVersionNumber">IssuerCaVersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.revocationStatus">RevocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList">CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.stages">Stages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList">CertificatesManagementCertificateAuthorityCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion">CertificatesManagementCertificateAuthorityCurrentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.certificateAuthorityId"></a>

```go
func CertificateAuthorityId() *string
```

- *Type:* *string

---

##### `IssuerCaVersionNumber`<sup>Required</sup> <a name="IssuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```go
func IssuerCaVersionNumber() *string
```

- *Type:* *string

---

##### `RevocationStatus`<sup>Required</sup> <a name="RevocationStatus" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.revocationStatus"></a>

```go
func RevocationStatus() CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList">CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.stages"></a>

```go
func Stages() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.validity"></a>

```go
func Validity() CertificatesManagementCertificateAuthorityCurrentVersionValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList">CertificatesManagementCertificateAuthorityCurrentVersionValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.versionNumber"></a>

```go
func VersionNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthorityCurrentVersion
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersion">CertificatesManagementCertificateAuthorityCurrentVersion</a>

---


### CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList <a name="CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get"></a>

```go
func Get(index *f64) CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference <a name="CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.revocationReason">RevocationReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">TimeOfRevocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus">CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevocationReason`<sup>Required</sup> <a name="RevocationReason" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```go
func RevocationReason() *string
```

- *Type:* *string

---

##### `TimeOfRevocation`<sup>Required</sup> <a name="TimeOfRevocation" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```go
func TimeOfRevocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus">CertificatesManagementCertificateAuthorityCurrentVersionRevocationStatus</a>

---


### CertificatesManagementCertificateAuthorityCurrentVersionValidityList <a name="CertificatesManagementCertificateAuthorityCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCurrentVersionValidityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatesManagementCertificateAuthorityCurrentVersionValidityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.get"></a>

```go
func Get(index *f64) CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference <a name="CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity">CertificatesManagementCertificateAuthorityCurrentVersionValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```go
func TimeOfValidityNotAfter() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```go
func TimeOfValidityNotBefore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthorityCurrentVersionValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityCurrentVersionValidity">CertificatesManagementCertificateAuthorityCurrentVersionValidity</a>

---


### CertificatesManagementCertificateAuthoritySubjectList <a name="CertificatesManagementCertificateAuthoritySubjectList" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthoritySubjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatesManagementCertificateAuthoritySubjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.get"></a>

```go
func Get(index *f64) CertificatesManagementCertificateAuthoritySubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CertificatesManagementCertificateAuthoritySubjectOutputReference <a name="CertificatesManagementCertificateAuthoritySubjectOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthoritySubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatesManagementCertificateAuthoritySubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.localityName">LocalityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.street">Street</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject">CertificatesManagementCertificateAuthoritySubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier"></a>

```go
func DistinguishedNameQualifier() *string
```

- *Type:* *string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.domainComponent"></a>

```go
func DomainComponent() *string
```

- *Type:* *string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.generationQualifier"></a>

```go
func GenerationQualifier() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.localityName"></a>

```go
func LocalityName() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.pseudonym"></a>

```go
func Pseudonym() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.stateOrProvinceName"></a>

```go
func StateOrProvinceName() *string
```

- *Type:* *string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.street"></a>

```go
func Street() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificatesManagementCertificateAuthoritySubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthoritySubject">CertificatesManagementCertificateAuthoritySubject</a>

---


### CertificatesManagementCertificateAuthorityTimeoutsOutputReference <a name="CertificatesManagementCertificateAuthorityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/certificatesmanagementcertificateauthority"

certificatesmanagementcertificateauthority.NewCertificatesManagementCertificateAuthorityTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatesManagementCertificateAuthorityTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.certificatesManagementCertificateAuthority.CertificatesManagementCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



