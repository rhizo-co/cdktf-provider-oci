# `identityDomainsIdentityPropagationTrust` Submodule <a name="`identityDomainsIdentityPropagationTrust` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentityPropagationTrust <a name="IdentityDomainsIdentityPropagationTrust" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust oci_identity_domains_identity_propagation_trust}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrust(scope Construct, id *string, config IdentityDomainsIdentityPropagationTrustConfig) IdentityDomainsIdentityPropagationTrust
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig">IdentityDomainsIdentityPropagationTrustConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig">IdentityDomainsIdentityPropagationTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers">PutImpersonationServiceUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab">PutKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAllowImpersonation">ResetAllowImpersonation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimName">ResetClientClaimName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimValues">ResetClientClaimValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClockSkewSeconds">ResetClockSkewSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetImpersonationServiceUsers">ResetImpersonationServiceUsers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetKeytab">ResetKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOauthClients">ResetOauthClients</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicCertificate">ResetPublicCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicKeyEndpoint">ResetPublicKeyEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectClaimName">ResetSubjectClaimName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectMappingAttribute">ResetSubjectMappingAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectType">ResetSubjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImpersonationServiceUsers` <a name="PutImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers"></a>

```go
func PutImpersonationServiceUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putImpersonationServiceUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKeytab` <a name="PutKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab"></a>

```go
func PutKeytab(value IdentityDomainsIdentityPropagationTrustKeytab)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putKeytab.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts"></a>

```go
func PutTimeouts(value IdentityDomainsIdentityPropagationTrustTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetActive` <a name="ResetActive" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetActive"></a>

```go
func ResetActive()
```

##### `ResetAllowImpersonation` <a name="ResetAllowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAllowImpersonation"></a>

```go
func ResetAllowImpersonation()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetClientClaimName` <a name="ResetClientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimName"></a>

```go
func ResetClientClaimName()
```

##### `ResetClientClaimValues` <a name="ResetClientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClientClaimValues"></a>

```go
func ResetClientClaimValues()
```

##### `ResetClockSkewSeconds` <a name="ResetClockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetClockSkewSeconds"></a>

```go
func ResetClockSkewSeconds()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetImpersonationServiceUsers` <a name="ResetImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetImpersonationServiceUsers"></a>

```go
func ResetImpersonationServiceUsers()
```

##### `ResetKeytab` <a name="ResetKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetKeytab"></a>

```go
func ResetKeytab()
```

##### `ResetOauthClients` <a name="ResetOauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOauthClients"></a>

```go
func ResetOauthClients()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetOcid"></a>

```go
func ResetOcid()
```

##### `ResetPublicCertificate` <a name="ResetPublicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicCertificate"></a>

```go
func ResetPublicCertificate()
```

##### `ResetPublicKeyEndpoint` <a name="ResetPublicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetPublicKeyEndpoint"></a>

```go
func ResetPublicKeyEndpoint()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSubjectClaimName` <a name="ResetSubjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectClaimName"></a>

```go
func ResetSubjectClaimName()
```

##### `ResetSubjectMappingAttribute` <a name="ResetSubjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectMappingAttribute"></a>

```go
func ResetSubjectMappingAttribute()
```

##### `ResetSubjectType` <a name="ResetSubjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetSubjectType"></a>

```go
func ResetSubjectType()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrust_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrust_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrust_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrust_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityDomainsIdentityPropagationTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityDomainsIdentityPropagationTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentityPropagationTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList">IdentityDomainsIdentityPropagationTrustIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsers">ImpersonationServiceUsers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytab">Keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference">IdentityDomainsIdentityPropagationTrustKeytabOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList">IdentityDomainsIdentityPropagationTrustMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList">IdentityDomainsIdentityPropagationTrustTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference">IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonationInput">AllowImpersonationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimNameInput">ClientClaimNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValuesInput">ClientClaimValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSecondsInput">ClockSkewSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsersInput">ImpersonationServiceUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytabInput">KeytabInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClientsInput">OauthClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocidInput">OcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificateInput">PublicCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpointInput">PublicKeyEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemasInput">SchemasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimNameInput">SubjectClaimNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttributeInput">SubjectMappingAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectTypeInput">SubjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonation">AllowImpersonation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimName">ClientClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValues">ClientClaimValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSeconds">ClockSkewSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClients">OauthClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificate">PublicCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpoint">PublicKeyEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimName">SubjectClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttribute">SubjectMappingAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectType">SubjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() IdentityDomainsIdentityPropagationTrustIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList">IdentityDomainsIdentityPropagationTrustIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `ImpersonationServiceUsers`<sup>Required</sup> <a name="ImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsers"></a>

```go
func ImpersonationServiceUsers() IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList">IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList</a>

---

##### `Keytab`<sup>Required</sup> <a name="Keytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytab"></a>

```go
func Keytab() IdentityDomainsIdentityPropagationTrustKeytabOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference">IdentityDomainsIdentityPropagationTrustKeytabOutputReference</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.meta"></a>

```go
func Meta() IdentityDomainsIdentityPropagationTrustMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList">IdentityDomainsIdentityPropagationTrustMetaList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tags"></a>

```go
func Tags() IdentityDomainsIdentityPropagationTrustTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList">IdentityDomainsIdentityPropagationTrustTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeouts"></a>

```go
func Timeouts() IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference">IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `AllowImpersonationInput`<sup>Optional</sup> <a name="AllowImpersonationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonationInput"></a>

```go
func AllowImpersonationInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `ClientClaimNameInput`<sup>Optional</sup> <a name="ClientClaimNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimNameInput"></a>

```go
func ClientClaimNameInput() *string
```

- *Type:* *string

---

##### `ClientClaimValuesInput`<sup>Optional</sup> <a name="ClientClaimValuesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValuesInput"></a>

```go
func ClientClaimValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClockSkewSecondsInput`<sup>Optional</sup> <a name="ClockSkewSecondsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSecondsInput"></a>

```go
func ClockSkewSecondsInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `ImpersonationServiceUsersInput`<sup>Optional</sup> <a name="ImpersonationServiceUsersInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsersInput"></a>

```go
func ImpersonationServiceUsersInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `KeytabInput`<sup>Optional</sup> <a name="KeytabInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.keytabInput"></a>

```go
func KeytabInput() IdentityDomainsIdentityPropagationTrustKeytab
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthClientsInput`<sup>Optional</sup> <a name="OauthClientsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClientsInput"></a>

```go
func OauthClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocidInput"></a>

```go
func OcidInput() *string
```

- *Type:* *string

---

##### `PublicCertificateInput`<sup>Optional</sup> <a name="PublicCertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificateInput"></a>

```go
func PublicCertificateInput() *string
```

- *Type:* *string

---

##### `PublicKeyEndpointInput`<sup>Optional</sup> <a name="PublicKeyEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpointInput"></a>

```go
func PublicKeyEndpointInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemasInput"></a>

```go
func SchemasInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectClaimNameInput`<sup>Optional</sup> <a name="SubjectClaimNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimNameInput"></a>

```go
func SubjectClaimNameInput() *string
```

- *Type:* *string

---

##### `SubjectMappingAttributeInput`<sup>Optional</sup> <a name="SubjectMappingAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttributeInput"></a>

```go
func SubjectMappingAttributeInput() *string
```

- *Type:* *string

---

##### `SubjectTypeInput`<sup>Optional</sup> <a name="SubjectTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectTypeInput"></a>

```go
func SubjectTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `AllowImpersonation`<sup>Required</sup> <a name="AllowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.allowImpersonation"></a>

```go
func AllowImpersonation() interface{}
```

- *Type:* interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `ClientClaimName`<sup>Required</sup> <a name="ClientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimName"></a>

```go
func ClientClaimName() *string
```

- *Type:* *string

---

##### `ClientClaimValues`<sup>Required</sup> <a name="ClientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clientClaimValues"></a>

```go
func ClientClaimValues() *[]*string
```

- *Type:* *[]*string

---

##### `ClockSkewSeconds`<sup>Required</sup> <a name="ClockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.clockSkewSeconds"></a>

```go
func ClockSkewSeconds() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthClients`<sup>Required</sup> <a name="OauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.oauthClients"></a>

```go
func OauthClients() *[]*string
```

- *Type:* *[]*string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicCertificate"></a>

```go
func PublicCertificate() *string
```

- *Type:* *string

---

##### `PublicKeyEndpoint`<sup>Required</sup> <a name="PublicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.publicKeyEndpoint"></a>

```go
func PublicKeyEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectClaimName`<sup>Required</sup> <a name="SubjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectClaimName"></a>

```go
func SubjectClaimName() *string
```

- *Type:* *string

---

##### `SubjectMappingAttribute`<sup>Required</sup> <a name="SubjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectMappingAttribute"></a>

```go
func SubjectMappingAttribute() *string
```

- *Type:* *string

---

##### `SubjectType`<sup>Required</sup> <a name="SubjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.subjectType"></a>

```go
func SubjectType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrust.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentityPropagationTrustConfig <a name="IdentityDomainsIdentityPropagationTrustConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

&identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrustConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	Issuer: *string,
	Name: *string,
	Schemas: *[]*string,
	Type: *string,
	AccountId: *string,
	Active: interface{},
	AllowImpersonation: interface{},
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	ClientClaimName: *string,
	ClientClaimValues: *[]*string,
	ClockSkewSeconds: *f64,
	Description: *string,
	ImpersonationServiceUsers: interface{},
	Keytab: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab,
	OauthClients: *[]*string,
	Ocid: *string,
	PublicCertificate: *string,
	PublicKeyEndpoint: *string,
	ResourceTypeSchemaVersion: *string,
	SubjectClaimName: *string,
	SubjectMappingAttribute: *string,
	SubjectType: *string,
	Tags: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#idcs_endpoint IdentityDomainsIdentityPropagationTrust#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#issuer IdentityDomainsIdentityPropagationTrust#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#name IdentityDomainsIdentityPropagationTrust#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.schemas">Schemas</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#schemas IdentityDomainsIdentityPropagationTrust#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#type IdentityDomainsIdentityPropagationTrust#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#account_id IdentityDomainsIdentityPropagationTrust#account_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.active">Active</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#active IdentityDomainsIdentityPropagationTrust#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.allowImpersonation">AllowImpersonation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#allow_impersonation IdentityDomainsIdentityPropagationTrust#allow_impersonation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attributes IdentityDomainsIdentityPropagationTrust#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attribute_sets IdentityDomainsIdentityPropagationTrust#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#authorization IdentityDomainsIdentityPropagationTrust#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimName">ClientClaimName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_name IdentityDomainsIdentityPropagationTrust#client_claim_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimValues">ClientClaimValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_values IdentityDomainsIdentityPropagationTrust#client_claim_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clockSkewSeconds">ClockSkewSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#clock_skew_seconds IdentityDomainsIdentityPropagationTrust#clock_skew_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#description IdentityDomainsIdentityPropagationTrust#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.impersonationServiceUsers">ImpersonationServiceUsers</a></code> | <code>interface{}</code> | impersonation_service_users block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.keytab">Keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | keytab block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.oauthClients">OauthClients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#oauth_clients IdentityDomainsIdentityPropagationTrust#oauth_clients}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.ocid">Ocid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicCertificate">PublicCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_certificate IdentityDomainsIdentityPropagationTrust#public_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicKeyEndpoint">PublicKeyEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_key_endpoint IdentityDomainsIdentityPropagationTrust#public_key_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#resource_type_schema_version IdentityDomainsIdentityPropagationTrust#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectClaimName">SubjectClaimName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_claim_name IdentityDomainsIdentityPropagationTrust#subject_claim_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectMappingAttribute">SubjectMappingAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_mapping_attribute IdentityDomainsIdentityPropagationTrust#subject_mapping_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectType">SubjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_type IdentityDomainsIdentityPropagationTrust#subject_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#idcs_endpoint IdentityDomainsIdentityPropagationTrust#idcs_endpoint}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#issuer IdentityDomainsIdentityPropagationTrust#issuer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#name IdentityDomainsIdentityPropagationTrust#name}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.schemas"></a>

```go
Schemas *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#schemas IdentityDomainsIdentityPropagationTrust#schemas}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#type IdentityDomainsIdentityPropagationTrust#type}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#account_id IdentityDomainsIdentityPropagationTrust#account_id}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#active IdentityDomainsIdentityPropagationTrust#active}.

---

##### `AllowImpersonation`<sup>Optional</sup> <a name="AllowImpersonation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.allowImpersonation"></a>

```go
AllowImpersonation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#allow_impersonation IdentityDomainsIdentityPropagationTrust#allow_impersonation}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attributes IdentityDomainsIdentityPropagationTrust#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#attribute_sets IdentityDomainsIdentityPropagationTrust#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#authorization IdentityDomainsIdentityPropagationTrust#authorization}.

---

##### `ClientClaimName`<sup>Optional</sup> <a name="ClientClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimName"></a>

```go
ClientClaimName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_name IdentityDomainsIdentityPropagationTrust#client_claim_name}.

---

##### `ClientClaimValues`<sup>Optional</sup> <a name="ClientClaimValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clientClaimValues"></a>

```go
ClientClaimValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#client_claim_values IdentityDomainsIdentityPropagationTrust#client_claim_values}.

---

##### `ClockSkewSeconds`<sup>Optional</sup> <a name="ClockSkewSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.clockSkewSeconds"></a>

```go
ClockSkewSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#clock_skew_seconds IdentityDomainsIdentityPropagationTrust#clock_skew_seconds}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#description IdentityDomainsIdentityPropagationTrust#description}.

---

##### `ImpersonationServiceUsers`<sup>Optional</sup> <a name="ImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.impersonationServiceUsers"></a>

```go
ImpersonationServiceUsers interface{}
```

- *Type:* interface{}

impersonation_service_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#impersonation_service_users IdentityDomainsIdentityPropagationTrust#impersonation_service_users}

---

##### `Keytab`<sup>Optional</sup> <a name="Keytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.keytab"></a>

```go
Keytab IdentityDomainsIdentityPropagationTrustKeytab
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#keytab IdentityDomainsIdentityPropagationTrust#keytab}

---

##### `OauthClients`<sup>Optional</sup> <a name="OauthClients" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.oauthClients"></a>

```go
OauthClients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#oauth_clients IdentityDomainsIdentityPropagationTrust#oauth_clients}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.ocid"></a>

```go
Ocid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}.

---

##### `PublicCertificate`<sup>Optional</sup> <a name="PublicCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicCertificate"></a>

```go
PublicCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_certificate IdentityDomainsIdentityPropagationTrust#public_certificate}.

---

##### `PublicKeyEndpoint`<sup>Optional</sup> <a name="PublicKeyEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.publicKeyEndpoint"></a>

```go
PublicKeyEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#public_key_endpoint IdentityDomainsIdentityPropagationTrust#public_key_endpoint}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#resource_type_schema_version IdentityDomainsIdentityPropagationTrust#resource_type_schema_version}.

---

##### `SubjectClaimName`<sup>Optional</sup> <a name="SubjectClaimName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectClaimName"></a>

```go
SubjectClaimName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_claim_name IdentityDomainsIdentityPropagationTrust#subject_claim_name}.

---

##### `SubjectMappingAttribute`<sup>Optional</sup> <a name="SubjectMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectMappingAttribute"></a>

```go
SubjectMappingAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_mapping_attribute IdentityDomainsIdentityPropagationTrust#subject_mapping_attribute}.

---

##### `SubjectType`<sup>Optional</sup> <a name="SubjectType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.subjectType"></a>

```go
SubjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#subject_type IdentityDomainsIdentityPropagationTrust#subject_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#tags IdentityDomainsIdentityPropagationTrust#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustConfig.property.timeouts"></a>

```go
Timeouts IdentityDomainsIdentityPropagationTrustTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts">IdentityDomainsIdentityPropagationTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#timeouts IdentityDomainsIdentityPropagationTrust#timeouts}

---

### IdentityDomainsIdentityPropagationTrustIdcsCreatedBy <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

&identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy {

}
```


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

&identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy {

}
```


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

&identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers {
	Rule: *string,
	Value: *string,
	Ocid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.rule">Rule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#rule IdentityDomainsIdentityPropagationTrust#rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.ocid">Ocid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#rule IdentityDomainsIdentityPropagationTrust#rule}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.property.ocid"></a>

```go
Ocid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#ocid IdentityDomainsIdentityPropagationTrust#ocid}.

---

### IdentityDomainsIdentityPropagationTrustKeytab <a name="IdentityDomainsIdentityPropagationTrustKeytab" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

&identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrustKeytab {
	SecretOcid: *string,
	SecretVersion: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretOcid">SecretOcid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_ocid IdentityDomainsIdentityPropagationTrust#secret_ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretVersion">SecretVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_version IdentityDomainsIdentityPropagationTrust#secret_version}. |

---

##### `SecretOcid`<sup>Required</sup> <a name="SecretOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretOcid"></a>

```go
SecretOcid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_ocid IdentityDomainsIdentityPropagationTrust#secret_ocid}.

---

##### `SecretVersion`<sup>Optional</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab.property.secretVersion"></a>

```go
SecretVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#secret_version IdentityDomainsIdentityPropagationTrust#secret_version}.

---

### IdentityDomainsIdentityPropagationTrustMeta <a name="IdentityDomainsIdentityPropagationTrustMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

&identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrustMeta {

}
```


### IdentityDomainsIdentityPropagationTrustTags <a name="IdentityDomainsIdentityPropagationTrustTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

&identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrustTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#key IdentityDomainsIdentityPropagationTrust#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#key IdentityDomainsIdentityPropagationTrust#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#value IdentityDomainsIdentityPropagationTrust#value}.

---

### IdentityDomainsIdentityPropagationTrustTimeouts <a name="IdentityDomainsIdentityPropagationTrustTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

&identitydomainsidentitypropagationtrust.IdentityDomainsIdentityPropagationTrustTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#create IdentityDomainsIdentityPropagationTrust#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#delete IdentityDomainsIdentityPropagationTrust#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#update IdentityDomainsIdentityPropagationTrust#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#create IdentityDomainsIdentityPropagationTrust#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#delete IdentityDomainsIdentityPropagationTrust#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_propagation_trust#update IdentityDomainsIdentityPropagationTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentityPropagationTrustIdcsCreatedByList <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentityPropagationTrustIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference <a name="IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy">IdentityDomainsIdentityPropagationTrustIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentityPropagationTrustIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsCreatedBy">IdentityDomainsIdentityPropagationTrustIdcsCreatedBy</a>

---


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy">IdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference <a name="IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resetOcid">ResetOcid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resetOcid"></a>

```go
func ResetOcid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocidInput">OcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocidInput"></a>

```go
func OcidInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsIdentityPropagationTrustKeytabOutputReference <a name="IdentityDomainsIdentityPropagationTrustKeytabOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustKeytabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsIdentityPropagationTrustKeytabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resetSecretVersion">ResetSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretVersion` <a name="ResetSecretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.resetSecretVersion"></a>

```go
func ResetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcidInput">SecretOcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcid">SecretOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersion">SecretVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretOcidInput`<sup>Optional</sup> <a name="SecretOcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcidInput"></a>

```go
func SecretOcidInput() *string
```

- *Type:* *string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersionInput"></a>

```go
func SecretVersionInput() *f64
```

- *Type:* *f64

---

##### `SecretOcid`<sup>Required</sup> <a name="SecretOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcid"></a>

```go
func SecretOcid() *string
```

- *Type:* *string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersion"></a>

```go
func SecretVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentityPropagationTrustKeytab
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustKeytab">IdentityDomainsIdentityPropagationTrustKeytab</a>

---


### IdentityDomainsIdentityPropagationTrustMetaList <a name="IdentityDomainsIdentityPropagationTrustMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentityPropagationTrustMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentityPropagationTrustMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsIdentityPropagationTrustMetaOutputReference <a name="IdentityDomainsIdentityPropagationTrustMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentityPropagationTrustMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta">IdentityDomainsIdentityPropagationTrustMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsIdentityPropagationTrustMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustMeta">IdentityDomainsIdentityPropagationTrustMeta</a>

---


### IdentityDomainsIdentityPropagationTrustTagsList <a name="IdentityDomainsIdentityPropagationTrustTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsIdentityPropagationTrustTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get"></a>

```go
func Get(index *f64) IdentityDomainsIdentityPropagationTrustTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsIdentityPropagationTrustTagsOutputReference <a name="IdentityDomainsIdentityPropagationTrustTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsIdentityPropagationTrustTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference <a name="IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainsidentitypropagationtrust"

identitydomainsidentitypropagationtrust.NewIdentityDomainsIdentityPropagationTrustTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityPropagationTrust.IdentityDomainsIdentityPropagationTrustTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



