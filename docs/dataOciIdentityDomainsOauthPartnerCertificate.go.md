# `dataOciIdentityDomainsOauthPartnerCertificate` Submodule <a name="`dataOciIdentityDomainsOauthPartnerCertificate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOauthPartnerCertificate <a name="DataOciIdentityDomainsOauthPartnerCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate oci_identity_domains_oauth_partner_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificate(scope Construct, id *string, config DataOciIdentityDomainsOauthPartnerCertificateConfig) DataOciIdentityDomainsOauthPartnerCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig">DataOciIdentityDomainsOauthPartnerCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig">DataOciIdentityDomainsOauthPartnerCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOauthPartnerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsOauthPartnerCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsOauthPartnerCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsOauthPartnerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOauthPartnerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.certEndDate">CertEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.certificateAlias">CertificateAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.certStartDate">CertStartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList">DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList">DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.keyStoreId">KeyStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.keyStoreName">KeyStoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.keyStorePassword">KeyStorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.map">Map</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList">DataOciIdentityDomainsOauthPartnerCertificateMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.sha1Thumbprint">Sha1Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.sha256Thumbprint">Sha256Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList">DataOciIdentityDomainsOauthPartnerCertificateTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.x509Base64Certificate">X509Base64Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.oAuthPartnerCertificateIdInput">OAuthPartnerCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.oAuthPartnerCertificateId">OAuthPartnerCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CertEndDate`<sup>Required</sup> <a name="CertEndDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.certEndDate"></a>

```go
func CertEndDate() *string
```

- *Type:* *string

---

##### `CertificateAlias`<sup>Required</sup> <a name="CertificateAlias" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.certificateAlias"></a>

```go
func CertificateAlias() *string
```

- *Type:* *string

---

##### `CertStartDate`<sup>Required</sup> <a name="CertStartDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.certStartDate"></a>

```go
func CertStartDate() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList">DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList">DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `KeyStoreId`<sup>Required</sup> <a name="KeyStoreId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.keyStoreId"></a>

```go
func KeyStoreId() *string
```

- *Type:* *string

---

##### `KeyStoreName`<sup>Required</sup> <a name="KeyStoreName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.keyStoreName"></a>

```go
func KeyStoreName() *string
```

- *Type:* *string

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.keyStorePassword"></a>

```go
func KeyStorePassword() *string
```

- *Type:* *string

---

##### `Map`<sup>Required</sup> <a name="Map" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.map"></a>

```go
func Map() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsOauthPartnerCertificateMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList">DataOciIdentityDomainsOauthPartnerCertificateMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Sha1Thumbprint`<sup>Required</sup> <a name="Sha1Thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.sha1Thumbprint"></a>

```go
func Sha1Thumbprint() *string
```

- *Type:* *string

---

##### `Sha256Thumbprint`<sup>Required</sup> <a name="Sha256Thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.sha256Thumbprint"></a>

```go
func Sha256Thumbprint() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsOauthPartnerCertificateTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList">DataOciIdentityDomainsOauthPartnerCertificateTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `X509Base64Certificate`<sup>Required</sup> <a name="X509Base64Certificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.x509Base64Certificate"></a>

```go
func X509Base64Certificate() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `OAuthPartnerCertificateIdInput`<sup>Optional</sup> <a name="OAuthPartnerCertificateIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.oAuthPartnerCertificateIdInput"></a>

```go
func OAuthPartnerCertificateIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `OAuthPartnerCertificateId`<sup>Required</sup> <a name="OAuthPartnerCertificateId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.oAuthPartnerCertificateId"></a>

```go
func OAuthPartnerCertificateId() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOauthPartnerCertificateConfig <a name="DataOciIdentityDomainsOauthPartnerCertificateConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

&dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	OAuthPartnerCertificateId: *string,
	Authorization: *string,
	ResourceTypeSchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#idcs_endpoint DataOciIdentityDomainsOauthPartnerCertificate#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.oAuthPartnerCertificateId">OAuthPartnerCertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#o_auth_partner_certificate_id DataOciIdentityDomainsOauthPartnerCertificate#o_auth_partner_certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#authorization DataOciIdentityDomainsOauthPartnerCertificate#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#resource_type_schema_version DataOciIdentityDomainsOauthPartnerCertificate#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#idcs_endpoint DataOciIdentityDomainsOauthPartnerCertificate#idcs_endpoint}.

---

##### `OAuthPartnerCertificateId`<sup>Required</sup> <a name="OAuthPartnerCertificateId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.oAuthPartnerCertificateId"></a>

```go
OAuthPartnerCertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#o_auth_partner_certificate_id DataOciIdentityDomainsOauthPartnerCertificate#o_auth_partner_certificate_id}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#authorization DataOciIdentityDomainsOauthPartnerCertificate#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_partner_certificate#resource_type_schema_version DataOciIdentityDomainsOauthPartnerCertificate#resource_type_schema_version}.

---

### DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy <a name="DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

&dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy {

}
```


### DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy <a name="DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

&dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsOauthPartnerCertificateMeta <a name="DataOciIdentityDomainsOauthPartnerCertificateMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

&dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificateMeta {

}
```


### DataOciIdentityDomainsOauthPartnerCertificateTags <a name="DataOciIdentityDomainsOauthPartnerCertificateTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

&dataociidentitydomainsoauthpartnercertificate.DataOciIdentityDomainsOauthPartnerCertificateTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList <a name="DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy">DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy">DataOciIdentityDomainsOauthPartnerCertificateIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList <a name="DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy">DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy">DataOciIdentityDomainsOauthPartnerCertificateIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOauthPartnerCertificateMetaList <a name="DataOciIdentityDomainsOauthPartnerCertificateMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificateMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificateMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMeta">DataOciIdentityDomainsOauthPartnerCertificateMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificateMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateMeta">DataOciIdentityDomainsOauthPartnerCertificateMeta</a>

---


### DataOciIdentityDomainsOauthPartnerCertificateTagsList <a name="DataOciIdentityDomainsOauthPartnerCertificateTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauthPartnerCertificateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference <a name="DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauthpartnercertificate"

dataociidentitydomainsoauthpartnercertificate.NewDataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTags">DataOciIdentityDomainsOauthPartnerCertificateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauthPartnerCertificateTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthPartnerCertificate.DataOciIdentityDomainsOauthPartnerCertificateTags">DataOciIdentityDomainsOauthPartnerCertificateTags</a>

---



