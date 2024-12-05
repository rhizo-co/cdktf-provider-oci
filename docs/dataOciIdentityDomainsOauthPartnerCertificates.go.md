# `dataOciIdentityDomainsOauthPartnerCertificates` Submodule <a name="`dataOciIdentityDomainsOauthPartnerCertificates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOauthPartnerCertificates <a name="DataOciIdentityDomainsOauthPartnerCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates oci_identity_domains_oauth_partner_certificates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificates(scope Construct, id *string, config DataOciIdentityDomainsOauthPartnerCertificatesConfig) DataOciIdentityDomainsOauthPartnerCertificates
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig">DataOciIdentityDomainsOauthPartnerCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig">DataOciIdentityDomainsOauthPartnerCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOauthPartnerCertificateCount">ResetOauthPartnerCertificateCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOauthPartnerCertificateFilter">ResetOauthPartnerCertificateFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetId"></a>

```go
func ResetId()
```

##### `ResetOauthPartnerCertificateCount` <a name="ResetOauthPartnerCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOauthPartnerCertificateCount"></a>

```go
func ResetOauthPartnerCertificateCount()
```

##### `ResetOauthPartnerCertificateFilter` <a name="ResetOauthPartnerCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetOauthPartnerCertificateFilter"></a>

```go
func ResetOauthPartnerCertificateFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOauthPartnerCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificates_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificates_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificates_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificates_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsOauthPartnerCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsOauthPartnerCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsOauthPartnerCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOauthPartnerCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificates">OauthPartnerCertificates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateCountInput">OauthPartnerCertificateCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateFilterInput">OauthPartnerCertificateFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateCount">OauthPartnerCertificateCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateFilter">OauthPartnerCertificateFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `OauthPartnerCertificates`<sup>Required</sup> <a name="OauthPartnerCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificates"></a>

```go
func OauthPartnerCertificates() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OauthPartnerCertificateCountInput`<sup>Optional</sup> <a name="OauthPartnerCertificateCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateCountInput"></a>

```go
func OauthPartnerCertificateCountInput() *f64
```

- *Type:* *f64

---

##### `OauthPartnerCertificateFilterInput`<sup>Optional</sup> <a name="OauthPartnerCertificateFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateFilterInput"></a>

```go
func OauthPartnerCertificateFilterInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `OauthPartnerCertificateCount`<sup>Required</sup> <a name="OauthPartnerCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateCount"></a>

```go
func OauthPartnerCertificateCount() *f64
```

- *Type:* *f64

---

##### `OauthPartnerCertificateFilter`<sup>Required</sup> <a name="OauthPartnerCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.oauthPartnerCertificateFilter"></a>

```go
func OauthPartnerCertificateFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificates.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOauthPartnerCertificatesConfig <a name="DataOciIdentityDomainsOauthPartnerCertificatesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

&dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	Authorization: *string,
	CompartmentId: *string,
	Id: *string,
	OauthPartnerCertificateCount: *f64,
	OauthPartnerCertificateFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#idcs_endpoint DataOciIdentityDomainsOauthPartnerCertificates#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#authorization DataOciIdentityDomainsOauthPartnerCertificates#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#compartment_id DataOciIdentityDomainsOauthPartnerCertificates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#id DataOciIdentityDomainsOauthPartnerCertificates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.oauthPartnerCertificateCount">OauthPartnerCertificateCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_count DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.oauthPartnerCertificateFilter">OauthPartnerCertificateFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_filter DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#resource_type_schema_version DataOciIdentityDomainsOauthPartnerCertificates#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_by DataOciIdentityDomainsOauthPartnerCertificates#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_order DataOciIdentityDomainsOauthPartnerCertificates#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#start_index DataOciIdentityDomainsOauthPartnerCertificates#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#idcs_endpoint DataOciIdentityDomainsOauthPartnerCertificates#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#authorization DataOciIdentityDomainsOauthPartnerCertificates#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#compartment_id DataOciIdentityDomainsOauthPartnerCertificates#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#id DataOciIdentityDomainsOauthPartnerCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthPartnerCertificateCount`<sup>Optional</sup> <a name="OauthPartnerCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.oauthPartnerCertificateCount"></a>

```go
OauthPartnerCertificateCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_count DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_count}.

---

##### `OauthPartnerCertificateFilter`<sup>Optional</sup> <a name="OauthPartnerCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.oauthPartnerCertificateFilter"></a>

```go
OauthPartnerCertificateFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#oauth_partner_certificate_filter DataOciIdentityDomainsOauthPartnerCertificates#oauth_partner_certificate_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#resource_type_schema_version DataOciIdentityDomainsOauthPartnerCertificates#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_by DataOciIdentityDomainsOauthPartnerCertificates#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#sort_order DataOciIdentityDomainsOauthPartnerCertificates#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificates#start_index DataOciIdentityDomainsOauthPartnerCertificates#start_index}.

---

### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

&dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates {

}
```


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

&dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy {

}
```


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

&dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

&dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta {

}
```


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

&dataociidentitydomainsoauthpartnercertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMeta</a>

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certEndDate">CertEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certificateAlias">CertificateAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certStartDate">CertStartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStoreId">KeyStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStoreName">KeyStoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStorePassword">KeyStorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.map">Map</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.sha1Thumbprint">Sha1Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.sha256Thumbprint">Sha256Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.x509Base64Certificate">X509Base64Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CertEndDate`<sup>Required</sup> <a name="CertEndDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certEndDate"></a>

```go
func CertEndDate() *string
```

- *Type:* *string

---

##### `CertificateAlias`<sup>Required</sup> <a name="CertificateAlias" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certificateAlias"></a>

```go
func CertificateAlias() *string
```

- *Type:* *string

---

##### `CertStartDate`<sup>Required</sup> <a name="CertStartDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.certStartDate"></a>

```go
func CertStartDate() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStoreId"></a>

```go
func KeyStoreId() *string
```

- *Type:* *string

---

##### `KeyStoreName`<sup>Required</sup> <a name="KeyStoreName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStoreName"></a>

```go
func KeyStoreName() *string
```

- *Type:* *string

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.keyStorePassword"></a>

```go
func KeyStorePassword() *string
```

- *Type:* *string

---

##### `Map`<sup>Required</sup> <a name="Map" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.map"></a>

```go
func Map() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Sha1Thumbprint`<sup>Required</sup> <a name="Sha1Thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.sha1Thumbprint"></a>

```go
func Sha1Thumbprint() *string
```

- *Type:* *string

---

##### `Sha256Thumbprint`<sup>Required</sup> <a name="Sha256Thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.sha256Thumbprint"></a>

```go
func Sha256Thumbprint() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `X509Base64Certificate`<sup>Required</sup> <a name="X509Base64Certificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.x509Base64Certificate"></a>

```go
func X509Base64Certificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificates</a>

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificates"

dataociidentitydomainsoauthpartnercertificates.NewDataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificates.DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags">DataOciIdentityDomainsOauthPartnerCertificatesOauthPartnerCertificatesTags</a>

---



