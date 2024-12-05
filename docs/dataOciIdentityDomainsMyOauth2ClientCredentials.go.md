# `dataOciIdentityDomainsMyOauth2ClientCredentials` Submodule <a name="`dataOciIdentityDomainsMyOauth2ClientCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyOauth2ClientCredentials <a name="DataOciIdentityDomainsMyOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials oci_identity_domains_my_oauth2client_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentials(scope Construct, id *string, config DataOciIdentityDomainsMyOauth2ClientCredentialsConfig) DataOciIdentityDomainsMyOauth2ClientCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig">DataOciIdentityDomainsMyOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig">DataOciIdentityDomainsMyOauth2ClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetMyOauth2ClientCredentialCount">ResetMyOauth2ClientCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetMyOauth2ClientCredentialFilter">ResetMyOauth2ClientCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetId"></a>

```go
func ResetId()
```

##### `ResetMyOauth2ClientCredentialCount` <a name="ResetMyOauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetMyOauth2ClientCredentialCount"></a>

```go
func ResetMyOauth2ClientCredentialCount()
```

##### `ResetMyOauth2ClientCredentialFilter` <a name="ResetMyOauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetMyOauth2ClientCredentialFilter"></a>

```go
func ResetMyOauth2ClientCredentialFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyOauth2ClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentials_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentials_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyOauth2ClientCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsMyOauth2ClientCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsMyOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentials">MyOauth2ClientCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialCountInput">MyOauth2ClientCredentialCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialFilterInput">MyOauth2ClientCredentialFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialCount">MyOauth2ClientCredentialCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialFilter">MyOauth2ClientCredentialFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `MyOauth2ClientCredentials`<sup>Required</sup> <a name="MyOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentials"></a>

```go
func MyOauth2ClientCredentials() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MyOauth2ClientCredentialCountInput`<sup>Optional</sup> <a name="MyOauth2ClientCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialCountInput"></a>

```go
func MyOauth2ClientCredentialCountInput() *f64
```

- *Type:* *f64

---

##### `MyOauth2ClientCredentialFilterInput`<sup>Optional</sup> <a name="MyOauth2ClientCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialFilterInput"></a>

```go
func MyOauth2ClientCredentialFilterInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `MyOauth2ClientCredentialCount`<sup>Required</sup> <a name="MyOauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialCount"></a>

```go
func MyOauth2ClientCredentialCount() *f64
```

- *Type:* *f64

---

##### `MyOauth2ClientCredentialFilter`<sup>Required</sup> <a name="MyOauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.myOauth2ClientCredentialFilter"></a>

```go
func MyOauth2ClientCredentialFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyOauth2ClientCredentialsConfig <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

&dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig {
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
	MyOauth2ClientCredentialCount: *f64,
	MyOauth2ClientCredentialFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#authorization DataOciIdentityDomainsMyOauth2ClientCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#compartment_id DataOciIdentityDomainsMyOauth2ClientCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#id DataOciIdentityDomainsMyOauth2ClientCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.myOauth2ClientCredentialCount">MyOauth2ClientCredentialCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_count DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.myOauth2ClientCredentialFilter">MyOauth2ClientCredentialFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_filter DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_by DataOciIdentityDomainsMyOauth2ClientCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_order DataOciIdentityDomainsMyOauth2ClientCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#start_index DataOciIdentityDomainsMyOauth2ClientCredentials#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsMyOauth2ClientCredentials#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#authorization DataOciIdentityDomainsMyOauth2ClientCredentials#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#compartment_id DataOciIdentityDomainsMyOauth2ClientCredentials#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#id DataOciIdentityDomainsMyOauth2ClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MyOauth2ClientCredentialCount`<sup>Optional</sup> <a name="MyOauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.myOauth2ClientCredentialCount"></a>

```go
MyOauth2ClientCredentialCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_count DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_count}.

---

##### `MyOauth2ClientCredentialFilter`<sup>Optional</sup> <a name="MyOauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.myOauth2ClientCredentialFilter"></a>

```go
MyOauth2ClientCredentialFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#my_oauth2client_credential_filter DataOciIdentityDomainsMyOauth2ClientCredentials#my_oauth2client_credential_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsMyOauth2ClientCredentials#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_by DataOciIdentityDomainsMyOauth2ClientCredentials#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#sort_order DataOciIdentityDomainsMyOauth2ClientCredentials#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_oauth2client_credentials#start_index DataOciIdentityDomainsMyOauth2ClientCredentials#start_index}.

---

### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

&dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials {

}
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

&dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

&dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

&dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta {

}
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

&dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes {

}
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

&dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags {

}
```


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

&dataociidentitydomainsmyoauth2clientcredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMeta</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.isResetSecret">IsResetSecret</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.scopes">Scopes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IsResetSecret`<sup>Required</sup> <a name="IsResetSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.isResetSecret"></a>

```go
func IsResetSecret() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.scopes"></a>

```go
func Scopes() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.user"></a>

```go
func User() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentials</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsScopes</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsTags</a>

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference <a name="DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyoauth2clientcredentials"

dataociidentitydomainsmyoauth2clientcredentials.NewDataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyOauth2ClientCredentials.DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser">DataOciIdentityDomainsMyOauth2ClientCredentialsMyOauth2ClientCredentialsUser</a>

---



